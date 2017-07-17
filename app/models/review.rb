# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  item_id    :integer          not null
#  body       :text
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord

  validates :item_id, :user_id, :rating, presence: true

  belongs_to :item
  belongs_to :user
end
