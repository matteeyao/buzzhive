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
require 'test_helper'

class DirectMessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
