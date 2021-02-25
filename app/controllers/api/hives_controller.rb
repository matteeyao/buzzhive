class Api::HivesController < ApplicationController
    before_action :set_hive, only: [:show, :edit, :update, :destroy]

    def index
        @hives = Hive.includes(:users).all
        if (params[:hive].present?)
            render "api/hives/search"
        else
            render :index
        end
    end

    def show
        @messages = @hive.messages.order(created_at: :desc).limit(100).reverse
        @hive_users = @hive.hive_users.includes(:user)
    end

    def create
        create_params = {
            name: hive_params[:name],
            description: hive_params[:description],
            is_private: hive_params[:is_private],
            author_id: current_user.id,
            ref_link: hive_params[:ref_link]
        }

        @hive = Hive.new(create_params)
        if @hive.save
            @hive.hive_users.where(user_id: current_user.id).first_or_create

            User.all
                .select { |user| user.id != current_user.id }
                .each { |user| HiveUser.new(hive_id: @hive.id, user_id: user.id).save }

            @hive_users = @hive.hive_users.includes(:user)

            serialized_data = ActiveModelSerializers::Adapter::Json.new(
                HiveSerializer.new(@hive)
            ).serializable_hash
            ActionCable.server.broadcast 'hives_channel', serialized_data
            render :show
        else
            # render json: ['Unable to create channel.'], status: 422
            render json: @hive.errors.full_messages, status: 422
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

    def destroy
        if @hive && current_user.id == @hive.author_id
            @hive.destroy
        end
    end

    private

    def set_hive
        @hive = Hive.find(params[:id])
    end

    def hive_params
        params.require(:hive).permit(:name, :description, :is_private, :ref_link)
    end

    def search_params
        params.require(:hive).permit(:search)
    end
end
