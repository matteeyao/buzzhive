class Api::MessagesController < ApplicationController
    before_action :set_hive, only: [:show, :create]

    def index
        @messages = Message.all.where(parent_message_id: nil, msgeable_id: params[:hive_id])
        render :index
    end

    def show
        @message = @hive.messages.find_by(id: params[:id])
        render 'api/messages/show'
        
        # if params[:id]
        #     .child_messages.where(parent_message_id: params[:id])
        # else
        #     @hive.messages.where(parent_id: nil)
        # end
        # # @message = 
        # render 'api/messages/show'
    end

    def create
        @message = @hive.messages.new(message_params)
        @message.save
        MessageRelayJob.perform_later(@message)
        render 'api/messages/new'
        # Option 1: Create a response to ajax call, have controller render a json response
        # Set up front end controller to dispatch action -> receiveMessage() normal action creator
        # Option 2: Make it so FE doesn't need ajax response (taking out .then)
        # Set up front end controller to dispatch action -> receiveMessage() normal action creator
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

    def set_hive
        @hive = current_user.hives.find(params[:hive_id])
    end

    def message_params
        params.require(:message).permit(:body, :author_id, :parent_message_id, 
            :msgeable_id, :msgeable_type)
    end
end
