Rails.application.routes.draw do
  resources :books 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #get URL, => "name of controller # name of action/method in controller"
    root 'books#index', as: 'home'
    get 'new' => 'books#new', as: 'new'
    get 'list' => 'books#list', as: 'list'
    get'edit' => 'books#edit', as: 'edit'
    get 'search'=> 'books#search'

end


