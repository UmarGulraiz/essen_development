class CreateIngredientsRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients_recipes do |t|
      t.integer :recipe_id
      t.integer :ingredient_id
      t.integer :amount
      t.string  :measure
      t.timestamps
    end
  end
end
