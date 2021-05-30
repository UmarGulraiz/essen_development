Rails.application.routes.draw do
  root 'posts#index'

  resources :post_ingredients
  resources :posts #, only: [:show, :index]
  resources :ingredients
  resources :categories, only: [:show, :index]
  devise_for :users
  resources :users

  namespace :admin do
    resources :categories
    resources :posts
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
