class HiveSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :is_private, :author_id, :ref_link
end
