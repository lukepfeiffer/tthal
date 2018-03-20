Rails.application.routes.draw do
  root to: "pages#home"
  resources :projects

  get "/about", to: "pages#about"
end
