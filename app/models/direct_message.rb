# == Schema Information
#
# Table name: direct_messages
#
#  id         :bigint           not null, primary key
#  users      :text             default([]), not null, is an Array
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class DirectMessage < ApplicationRecord
    include Messageable

    belongs_to :author,
        class_name: :User,
        inverse_of: :authored_direct_messages
    has_many :direct_message_users, dependent: :destroy
    has_many :users, through: :direct_message_users
end
