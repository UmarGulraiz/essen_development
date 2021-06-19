class CreateCollections < ActiveRecord::Migration[6.1]
  def change
    create_table :collections do |t|
      t.integer :user_id
      t.integer :name
      t.string  :image
      t.timestamps
    end
  end
end
