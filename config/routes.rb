Rails.application.routes.draw do

  root to: 'application#angular'
  resources :submissions, only: [:create, :index, :show, :update]
  resources :poems, only: [:create, :index, :show, :update]
  resources :journals, only: [:create, :index, :show, :update]
end
