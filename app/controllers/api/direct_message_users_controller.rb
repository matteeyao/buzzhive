class Api::DirectMessageUsersController < ApplicationController
    before_action :set_direct_message, only: [:create]
    
    def index
        @direct_message_users = current_user.direct_messages.direct_message_users
    end

    def create
        @direct_message_user = @direct_message.direct_message_users.where(user_id: params[:direct_message_user][:user_id]).first_or_create
        redirect_to api_direct_message_url(@direct_message)
    end

    private

    def set_direct_message
        @direct_message = DirectMessage.find(params[:direct_message_id])
    end

    def direct_message_user_params
        params.require(:direct_message_user).permit(:user_id)
    end
end
