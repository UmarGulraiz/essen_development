class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :description
      t.string :image
      t.integer :collection_id
      t.integer :category_id
      t.integer :complexity
      t.integer :cooking_time
      t.integer :number_of_servings
      t.string :recipe_text
      t.timestamps
    end
  end
end
