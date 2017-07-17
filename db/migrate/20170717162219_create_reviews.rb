class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :item_id, null: false
      t.text :body
      t.integer :rating, null: false
      t.timestamps

      t.index :user_id
      t.index :item_id
    end
  end
end
