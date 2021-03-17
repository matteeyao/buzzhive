class Api::DirectMessagesController < ApplicationController
    before_action :set_direct_message, only: [:show, :edit, :update, :destroy]

    def index
        @direct_messages = current_user.direct_messages
        render :index
    end

    def show
        @direct_message_users = @direct_message.direct_message_users.includes(:user)
    end
    
    def create
        @direct_message = DirectMessage.new(direct_message_params)
        if @direct_message.save
            @direct_message.direct_message_users.where(user_id: current_user.id).first_or_create
            render :show
        else
            render json: ["Unable to create direct message channel."], status: 422
        end
    end

    def destroy
        @direct_message.destroy
    end

    private

    def set_direct_message
        @direct_message = DirectMessage.find(params[:id])
    end

    def direct_message_params
        params.require(:direct_message).permit(:author_id)
    end
end
