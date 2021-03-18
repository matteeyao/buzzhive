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
require 'test_helper'

class DirectMessageUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
