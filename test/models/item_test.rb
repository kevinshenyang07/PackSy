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

require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
