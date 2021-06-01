class Ingredient < ApplicationRecord
  has_many :post_ingredients
  has_many :posts, through: :post_ingredients
  has_many :ingredient_changes
end
