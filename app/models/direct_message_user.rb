class DirectMessageUser < ApplicationRecord
  belongs_to :direct_message
  belongs_to :user
end
