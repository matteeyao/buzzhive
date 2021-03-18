class MessageRelayJob < ApplicationJob
  queue_as :default

  def perform(message)
        boolean = message.msgeable_type == "Hive"
        channel = boolean ? 
            Hive.find(message.msgeable_id) :
            DirectMessage.find(message.msgeable_id)

        serialized_data = ActiveModelSerializers::Adapter::Json.new(
            MessageSerializer.new(message)
        ).serializable_hash.deep_transform_keys! { |key| key.to_s.camelize(:lower) }
        
        if boolean
            HivesChannel.broadcast_to(channel, serialized_data)
        else
            DirectMessagesChannel.broadcast_to(channel, serialized_data)
        end
  end
end
