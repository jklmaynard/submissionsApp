Rails.application.routes.draw do

  root to: 'application#angular'
  resources :submissions, only: [:create, :index, :show]
  resources :poems, only: [:create, :index, :shows]
  resources :journals, only: [:create, :index, :show]
end
