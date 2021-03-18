class DirectMessagesChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    @direct_message = DirectMessage.find_by(id: params[:id])
    stream_for @direct_message
  end

  def unsubscribed
    stop_all_streams
  end
end
