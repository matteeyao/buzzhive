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
require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
