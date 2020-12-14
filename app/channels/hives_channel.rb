class HivesChannel < ApplicationCable::Channel
  def subscribed
    # @hive = Hive.find_by(id: params[:id])
    # stream_for @hive
  end

  def unsubscribed
    stop_all_streams
  end

  def transmit(data)

  end
end
