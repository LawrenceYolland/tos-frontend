Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
        resources :users, only: [:index, :create]
        get '/validate', to: 'auth#validate_token'
        post "/login", to: "auth#create"
        # get '/profile', to: 'users#profile'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
