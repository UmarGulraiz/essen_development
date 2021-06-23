class RecipesController < ApplicationController
  def show
    @recipe = Post.find(params[:id]).serializable_hash(include: [:ingredients, :post_ingredients])
  end
end
