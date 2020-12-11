class HivesChannel < ApplicationCable::Channel
  def subscribed
    # stream_for Hive.find_by(id: params[:])
  end

  def unsubscribed
    stop_all_streams
  end
end
