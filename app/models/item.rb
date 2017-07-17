class Item < ApplicationRecord

  validates :title, :producer, :price, :category, :quantity, :description,
    presence: true

  has_many :reviews

  # associate items with images

  # include PgSearch

end
