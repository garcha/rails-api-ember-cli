Rails.application.routes.draw do
  post 'auth_user' => 'authentication#auth_user'
  devise_for :users
  resources :publishers
  resources :authors
  resources :books
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
