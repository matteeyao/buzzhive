Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
        resource :user, only: [:index, :show, :create, :update, :destroy]
        resource :session, only: [:create, :destroy, :show]
        resources :hives, only: [:index, :show, :create, :update, :destroy] do
            resource :hive_users, only: [:index, :create, :update, :destroy]
            resources :messages, only: [:index, :create, :update, :destroy]
        end
    end
    root "static_pages#root"
    # mount ActionCable.server => '/cable'
end
