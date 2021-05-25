class PostIngredientsController < ApplicationController
  before_action :set_post_ingredient, only: %i[ show edit update destroy ]

  # GET /post_ingredients or /post_ingredients.json
  def index
    @post_ingredients = PostIngredient.all
  end

  # GET /post_ingredients/1 or /post_ingredients/1.json
  def show
  end

  # GET /post_ingredients/new
  def new
    @post_ingredient = PostIngredient.new
  end

  # GET /post_ingredients/1/edit
  def edit
  end

  # POST /post_ingredients or /post_ingredients.json
  def create
    @post_ingredient = PostIngredient.new(post_ingredient_params)

    respond_to do |format|
      if @post_ingredient.save
        format.html { redirect_to @post_ingredient, notice: "Post ingredient was successfully created." }
        format.json { render :show, status: :created, location: @post_ingredient }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @post_ingredient.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /post_ingredients/1 or /post_ingredients/1.json
  def update
    respond_to do |format|
      if @post_ingredient.update(post_ingredient_params)
        format.html { redirect_to @post_ingredient, notice: "Post ingredient was successfully updated." }
        format.json { render :show, status: :ok, location: @post_ingredient }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @post_ingredient.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /post_ingredients/1 or /post_ingredients/1.json
  def destroy
    @post_ingredient.destroy
    respond_to do |format|
      format.html { redirect_to post_ingredients_url, notice: "Post ingredient was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post_ingredient
      @post_ingredient = PostIngredient.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_ingredient_params
      params.require(:post_ingredient).permit(:post_id, :ingredient_id, :amount, :measure, :ingr_replica1_id, :ingr_replica2_id, :ingr_replica3_id, :ingr_replica4_id, :ingr_replica5_id)
    end
end
