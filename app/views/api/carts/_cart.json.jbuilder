json.extract! cart, :id, :user_id, :purchased

# json.cart_items do
#   json.array! cart.cart_items do |cart_item|
#     json.cart_item_id cart_item.id
#     json.item_id cart_item.item.id
#     json.item_quantity cart_item.item_quantity
#     json.item_producer cart_item.item.producer
#     json.item_name cart_item.item.name
#     json.item_description cart_item.item.description
#     json.item_price cart_item.item.price
#     json.item_category cart_item.item.category
#     json.item_image cart_item.item.image
#     json.item_updated_date_time cart_item.updated_at
#   end
# end

json.cart_items do
  json.array! cart.cart_items do |cart_item|
    json.cart_item_id cart_item.id
    json.item_quantity cart_item.item_quantity
    json.extract! cart_item.item, :id, :producer, :title, :description,
      :price, :category, :img_url, :updated_at
  end
end
