# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    attr_reader :password

    after_initialize :ensure_session_token
    after_save :seed_direct_messages

    validates :username, :fname, :lname, :email, :password_digest, 
        :session_token, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :username, :email, :session_token, uniqueness: true

    has_many :hive_users, dependent: :destroy
    has_many :hives, through: :hive_users
    has_many :authored_hives,
        class_name: :Hive,
        foreign_key: :author_id
    has_many :authored_messages, inverse_of: 'author'

    has_many :direct_message_users, dependent: :destroy
    has_many :direct_messages, through: :direct_message_users
    has_many :authored_direct_messages,
        class_name: :DirectMessage,
        foreign_key: :author_id

    def self.find_by_credentials(username, password) 
        user = User.find_by(username: username)
        # user && user.is_password?(password) ? user : nil
        user.try(:is_password?, password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_unique_session_token
        self.save!
        self.session_token
    end

    def seed_direct_messages
        User.all
            .reject { |user| user.id == self.id }
            .sample(2)
            .each do |user| 
                @direct_message = DirectMessage.new(author_id: user.id)
                @direct_message.save
                DirectMessageUser.new(direct_message_id: @direct_message.id, user_id: self.id).save
                DirectMessageUser.new(direct_message_id: @direct_message.id, user_id: user.id).save
            end
    end

    private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end
end
