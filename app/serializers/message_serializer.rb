class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :author_id, :parent_message_id, :msgeable_id,
    :msgeable_type, :created_at
end
