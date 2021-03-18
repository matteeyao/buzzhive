class Api::HiveUsersController < ApplicationController
    before_action :set_hive
    
    def create
        if (params[:hive_user][:user_id].present?)
            @hive_user = @hive.hive_users.where(user_id: params[:hive_user][:user_id]).first_or_create
        else
            @hive_user = @hive.hive_users.where(user_id: current_user.id).first_or_create
        end
        redirect_to api_hive_url(@hive)
    end

    def destroy
        @hive_user = @hive.hive_users.where(user_id: params[:hive_user][:user_id]).destroy_all
    end

    private

    def set_hive
        @hive = Hive.find(params[:hive_id])
    end

    def hive_user_params
        params.require(:hive_user).permit(:user_id)
    end
end
