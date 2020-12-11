Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
        resources :users do
            # resources :subscriptions, only [:index]
        end
        resource :session, only: [:create, :destroy, :show]
        resources :hives do
            resource :hive_user
            resources :messages
        end
    end
    root "static_pages#root"
    mount ActionCable.server => '/cable'
end
