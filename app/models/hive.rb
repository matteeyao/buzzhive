# == Schema Information
#
# Table name: hives
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  is_private  :boolean          not null
#  author_id   :integer          not null
#  ref_link    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Hive < ApplicationRecord
    include Messageable

    before_validation :ensure_description

    validates :name, :description, presence: true
    validates :is_private, inclusion: { in: [ true, false ] }
    validates :name, uniqueness: true

    belongs_to :author,
        class_name: :User,
        inverse_of: :authored_hives
    has_many :hive_users, dependent: :destroy
    has_many :users, through: :hive_users

    private

    def ensure_description
        self.description ||= "Channel description..."
    end
end
