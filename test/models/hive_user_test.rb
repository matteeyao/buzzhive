# == Schema Information
#
# Table name: hive_users
#
#  id           :bigint           not null, primary key
#  hive_id      :integer          not null
#  user_id      :integer          not null
#  last_read_at :datetime
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require 'test_helper'

class HiveUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
