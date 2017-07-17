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
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Item < ApplicationRecord

  validates :title, :producer, :price, :category, :quantity, :description,
    presence: true

  has_many :reviews

  # associate items with images

  # include PgSearch

end
