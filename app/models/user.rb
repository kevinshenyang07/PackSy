# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  firstname       :string           not null
#  lastname        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  after_initialize :ensure_session_token
  after_create :create_new_cart

  validates :firstname, :lastname, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :session_token, :email, uniqueness: true

  has_many :items
  has_many :carts
  has_many :cart_items,
    through: :carts,
    source: :cart_items
  has_many :reviews


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def find_unpurchased_items
    cart = self.carts.where(purchased: false)
    cart.items
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def create_new_cart
    Cart.create!(user_id: self.id)
  end

end
