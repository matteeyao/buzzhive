class Api::MessagesController < ApplicationController
    before_action :set_hive, only: [:create]

    def index
        @messages = Message.all
        render :index
    end

    def create
        @message = @hive.messages.new(message_params)
        message.author = current_user
        message.save
        MessageRelayJob.perform_later(message)
    end

    # def update
    #     @user = selected_user
    #     if @user.try(:update_attributes, user_params)
    #         render :show
    #     elsif !@user
    #         render json: ["User credentials could not be found. Please try again."], stats: 400
    #     else
    #         render json: @user.errors.full_messages, status: 422
    #     end
    # end

    # def destroy
    #     @user = selected_user
    #     if @user
    #         @user.destroy
    #         render :show
    #     else
    #         render ['User could not be located.']
    #     end
    # end

    private

    def selected_hive
        Hive.find(params[:id])
    end

    def message_params
        params.require(:message).permit(:body, :author_id, :parent_message_id, 
            :msgeable_id, :msgeable_type)
    end
end
