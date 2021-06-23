class Post < ApplicationRecord
  validates :name, :presence => true
	validates :title, :presence => true,
										:length => { :minimum => 5 }

  has_many :post_ingredients, dependent: :destroy
  has_many :ingredients, through: :post_ingredients

  belongs_to :category
  belongs_to :user

  has_many :collection_posts

  mount_uploader :image, ImageUploader
  accepts_nested_attributes_for :post_ingredients, reject_if: :all_blank, allow_destroy: true
  enum complexity: { 'easy': 0, 'medium': 1, 'hard': 2 }
end
