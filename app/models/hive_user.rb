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
class HiveUser < ApplicationRecord
    belongs_to :hive
    belongs_to :user

    before_create :set_last_read

    def set_last_read
        self.last_read_at = Time.zone.now
    end
end
