# == Schema Information
#
# Table name: messages
#
#  id                :bigint           not null, primary key
#  body              :string           not null
#  author_id         :integer          not null
#  parent_message_id :integer
#  msgeable_id       :integer          not null
#  msgeable_type     :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :author_id, :parent_message_id, :msgeable_id,
    :msgeable_type, :created_at
end
