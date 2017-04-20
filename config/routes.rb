Rails.application.routes.draw do

  root to: 'application#angular'
  resources :submissions, only: [:create, :index, :show]
  resources :poems, only: [:create, :index, :show] do
    resources :submissions, only: [:show]
  end
  resources :journals, only: [:create, :index, :show] do
    resources :submissions, only: [:show]
  end
end
