module Messageable
    extend ActiveSupport::Concern

    included do
        has_many :messages,
            as: :msgeable,
            class_name: :Message,
            dependent: :destroy
    end

    def messages
        self.messages.sum(:value)
    end
end
