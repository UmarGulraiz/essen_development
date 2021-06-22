class MainController < ApplicationController
  def index
    @recipes = Post.all
    @collections = Collection.all
  end
end
