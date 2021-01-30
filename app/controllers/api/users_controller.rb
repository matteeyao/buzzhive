class Api::UsersController < ApplicationController
    def index
        @users = User.all
    end

    def show
        @user = selected_user
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = selected_user
        if @user.try(:update_attributes, user_params)
            render :show
        elsif !@user
            render json: ["User credentials could not be found. Please try again."], stats: 400
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = selected_user
        if @user
            @user.destroy
            render :show
        else
            render ['User could not be located.']
        end
    end

    private

    def selected_user
        User.find(params[:id]).includes(:hives)
    end

    def user_params
        params.require(:user).permit(
            :username,
            :fname,
            :lname,
            :email,
            :password,
        )
    end
end
