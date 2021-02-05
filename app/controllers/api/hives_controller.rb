class Api::HivesController < ApplicationController
    before_action :set_hive, only: [:show, :edit, :update, :destroy]

    def index
        if params[:user_id]
            @hives = User.find(current_user.id).hives
            render :index
        else
            @hives = Hive.includes(:users).all
            render (hive_params[:search] ? "api/hives/search" : :index)
        end
    end

    def show
        @messages = @hive.messages.order(created_at: :desc).limit(100).reverse
        @hive_users = @hive.hive_users.includes(:user)
    end

    def create
        @hive = Hive.new(hive_params)
        if @hive.save
            @hive.hive_users.where(user_id: current_user.id).first_or_create
            serialized_data = ActiveModelSerializers::Adapter::Json.new(
                HiveSerializer.new(@hive)
            ).serializable_hash
            ActionCable.server.broadcast 'hives_channel', serialized_data
            head :ok
        else
            render json: ['Unable to create channel.'], status: 422
        end
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
        @hive = Hive.find(params[:id])
    end

    def hive_params
        params.require(:hive).permit(:name, :description, :is_private, :ref_link, :search)
    end
end
