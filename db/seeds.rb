# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Item.destroy_all
Cart.destroy_all
CartItem.destroy_all
Review.destroy_all
Cart.destroy_all

# demo users
User.create!([
  {firstname: 'Norris', lastname: 'Kwan', email: 'norris.k@gmail.com', password: '123456'},
  {firstname: 'Aaron', lastname: 'Wayne', email: 'aaron.wayne@gmail.com', password: '123456'},
  {firstname: 'Dallas', lastname: 'Tall', email: 'dallas.tall@gmail.com', password: '123456'},
  {firstname: 'Debra', lastname: 'Fong', email: 'debrafong@gmail.com', password: '123456'},
  {firstname: 'Louis', lastname: 'Cruz', email: 'louis.cruz@gmail.com', password: '123456'},
])

# fake users
20.times do
  fname, lname = Faker::Name.name.split(' ')
  email = Faker::Internet.email
  User.create!({firstname: fname, lastname: lname, email: email, password: '123456'})
end

Item.create!([
  {title: 'Outfitter luggage', producer: 'Herschel', price: 99.99,
   category: 'luggage', quantity: 10, img_url: "http://via.placeholder.com/350x150",
   description:
     "The Outfitter travel duffle features Herschel Supply's innovative shoe compartment, stowable backpack straps and additional carrying options.
     Black and white striped fabric liner
     Two-way waterproof zipper with pebbled leather pulls
     Pebbled leather carrying handle snap fastener
     Additional utility handles
     Stowable contoured backpack straps
     Removable padded webbing shoulder strap
     Clip-fastened laundry bag with drawcord closure
     Signature shoe compartment
     Classic woven label"
  }
])

Item.create!([
  {title: 'Outfitter luggage 2', producer: 'Herschel', price: 29.99,
   category: 'purse', quantity: 10, img_url: "http://via.placeholder.com/350x150",
   description:
     "The Outfitter travel duffle features Herschel Supply's innovative shoe compartment, stowable backpack straps and additional carrying options.
     Black and white striped fabric liner
     Two-way waterproof zipper with pebbled leather pulls
     Pebbled leather carrying handle snap fastener
     Additional utility handles
     Stowable contoured backpack straps
     Removable padded webbing shoulder strap
     Clip-fastened laundry bag with drawcord closure
     Signature shoe compartment
     Classic woven label"
  }
])

Item.create!([
  {title: 'Outfitter luggage 3', producer: 'Herschel', price: 49.99,
   category: 'backpack', quantity: 10, img_url: "http://via.placeholder.com/350x150",
   description:
     "The Outfitter travel duffle features Herschel Supply's innovative shoe compartment, stowable backpack straps and additional carrying options.
     Black and white striped fabric liner
     Two-way waterproof zipper with pebbled leather pulls
     Pebbled leather carrying handle snap fastener
     Additional utility handles
     Stowable contoured backpack straps
     Removable padded webbing shoulder strap
     Clip-fastened laundry bag with drawcord closure
     Signature shoe compartment
     Classic woven label"
  }
])
