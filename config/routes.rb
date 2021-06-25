Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/reviews/:review_id/comics/:id', to: 'comics#add_review'
  
  resources :comics do 
    resources :reviews, shallow: true
  end
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
