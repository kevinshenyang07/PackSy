# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item.destroy_all
Cart.destroy_all
CartItem.destroy_all
Review.destroy_all
Cart.destroy_all

demoUsers = User.create!([
  {firstname: 'Norris', lastname: 'Kwan', email: 'norris.k@gmail.com', password: '123456'},
  {firstname: 'Aaron', lastname: 'Wayne', email: 'aaron.wayne@gmail.com', password: '123456'},
  {firstname: 'Dallas', lastname: 'Tall', email: 'dallas.tall@gmail.com', password: '123456'},
  {firstname: 'Debra', lastname: 'Fong', email: 'debrafong@gmail.com', password: '123456'},
  {firstname: 'Louis', lastname: 'Cruz', email: 'louis.cruz@gmail.com', password: '123456'},
])
