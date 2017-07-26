json.extract! cart_item, :id, :cart_id, :item_id, :item_quantity
json.extract! cart_item.item, :title, :description, :price, :category,
  :img_url, :producer
