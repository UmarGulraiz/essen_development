class RecipiesController < ApplicationController
  def index
    @recipes = Post.all
  end
end
