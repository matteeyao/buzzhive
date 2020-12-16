Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
        resource :user, only: [:show, :create, :update, :destroy]
        resource :session, only: [:create, :destroy, :show]
        resources :users, only: [:index]
        resources :hives, only: [:index, :show, :create, :update, :destroy] do
            resource :hive_users, only: [:index, :create, :update, :destroy]
            resources :messages, only: [:create, :update, :destroy]
        end
    end
    root to: "static_pages#root"
    # mount ActionCable.server => '/cable'
end
