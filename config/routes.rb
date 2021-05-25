Rails.application.routes.draw do
  root 'posts#index'

  resources :post_ingredients
  resources :posts
  resources :ingredients
  resources :categories
  devise_for :users
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
