class HivesChannel < ApplicationCable::Channel
  def subscribed
    current_user.hives.each do |hive|
        stream_from "Hives:#{hive.id}"
    end
  end

  def unsubscribed
    stop_all_streams
  end

  def transmit(data)

  end
end
