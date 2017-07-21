Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :items, only: [:index, :show] do
      resources :reviews, only: [:index]
    end
  end
end
