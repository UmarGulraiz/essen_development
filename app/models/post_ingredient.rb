class PostIngredient < ApplicationRecord
  enum measure: %w(ч мг г кг мл л ч.л ст.л шт)

  belongs_to :post
  belongs_to :ingredient
  # belongs_to :ingr_replica1, optional: true
  # belongs_to :ingr_replica2, optional: true
  # belongs_to :ingr_replica3, optional: true
  # belongs_to :ingr_replica4, optional: true
  # belongs_to :ingr_replica5, optional: true
end
