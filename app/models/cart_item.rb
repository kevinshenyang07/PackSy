class CartItem < ApplicationRecord

  validates :cart_id, :item_id, :item_quantity, presence: true
  validates :item_id, uniqueness: {
    scope: :cart_id, message: "Item already in cart."
  }

  belongs_to :cart
  belongs_to :item

  has_one :user,
    through: :cart,
    source: :user

  has_one :review,
    through: :user,
    source: :reviews
end
