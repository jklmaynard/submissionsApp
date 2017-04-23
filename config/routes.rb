Rails.application.routes.draw do

  root to: 'application#angular'
  resources :submissions, only: [:create, :index, :show]
  resources :poems, only: [:create, :index, :show]
  resources :journals, only: [:create, :index, :show]
end
