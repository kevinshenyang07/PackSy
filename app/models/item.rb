# == Schema Information
#
# Table name: items
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  producer    :string           not null
#  price       :decimal(6, 2)    not null
#  category    :string           not null
#  quantity    :integer          not null
#  description :text             not null
#  img_url     :string           not null
#  featured    :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Item < ApplicationRecord

  validates :title, :producer, :price, :category, :quantity,
    :description, :img_url, presence: true

  has_many :reviews

  include PgSearch
  pg_search_scope :search_by_item_details,
    :against => [:title, :description, :category],
    :using => { tsearch: { any_word: true }}

end
