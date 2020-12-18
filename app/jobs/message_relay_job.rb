class MessageRelayJob < ApplicationJob
  queue_as :default

  def perform(message)
        hive = Hive.find(message.msgeable_id)

        serialized_data = ActiveModelSerializers::Adapter::Json.new(
            MessageSerializer.new(message)
        ).serializable_hash.deep_transform_keys! { |key| key.to_s.camelize(:lower) }
        
        HivesChannel.broadcast_to(hive, serialized_data)
  end
end
