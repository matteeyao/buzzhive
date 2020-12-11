# == Schema Information
#
# Table name: messages
#
#  id                :bigint           not null, primary key
#  body              :string           not null
#  author_id         :integer          not null
#  parent_message_id :integer
#  msgeable_id       :integer          not null
#  msgeable_type     :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Message < ApplicationRecord
    validates :body, presence: true
    validates :author_id, uniqueness: { scope: [:msgeable_id, :msgeable_type] }

    after_initialize :ensure_messageable!

    belongs_to :messageable, polymorphic: true

    belongs_to :author,
        class_name: :Message,
        foreign_key: :author_id,
        inverse_of: :authored_messages

    has_many :child_messages,
        class_name: :Message,
        foreign_key: :parent_message_id,
        primary_key: :id

    belongs_to :parent_message,
        class_name: :Message,
        foreign_key: :parent_message_id,
        primary_key: :id,
        optional: true

    private
    
    def ensure_messageable!
        if parent_message
            self.msgeable_id ||= self.parent_message.msgeable_id
            self.msgeable_type ||= self.parent_message.msgeable_type
        end
    end
end
