class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :title, null: false
      t.string :producer, null: false
      t.decimal :price, precision: 6, scale: 2, null: false
      t.string :category, null: false
      t.integer :quantity, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end
