# == Schema Information
#
# Table name: direct_message_users
#
#  id                :bigint           not null, primary key
#  direct_message_id :bigint
#  user_id           :bigint
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class DirectMessageUser < ApplicationRecord
  belongs_to :direct_message
  belongs_to :user
end
