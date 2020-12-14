class Api::HiveUsersController < ApplicationController
    before_action :set_hive
    
    def create
        @hive_user = @hive.hive_users.where(user_id: current_user.id).first_or_create
        redirect_to @hive
    end

    def destroy
        @hive_user = @hive.hive_users.where(user_id: current_user.id).destroy_all
        redirect_to hives_path
    end

    private

    def set_hive
        @hive = Hive.find(params[:hive_id])
    end
end
