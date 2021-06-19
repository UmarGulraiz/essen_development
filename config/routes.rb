Rails.application.routes.draw do
  devise_for :users
  root 'landing#index'
  # root 'posts#index'
  get 'partners/index', to: 'partners#index'

  resources :posts #, only: [:show, :index]
  resources :ingredients, only: :index
  resources :categories, only: :index
  resources :users, except: [:new, :create]

  namespace :admin do
    resources :categories
    resources :ingredients
    resources :users
    resources :posts do
      resources :post_ingredients
    end
  end

  resources :posts do
    resources :post_ingredients
  end

  get 'homepage', to: 'main#index'
  get 'recipe', to: 'recipies#index'
  get 'all_collections', to: 'all_collections#index'
  get 'author', to: 'author#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
