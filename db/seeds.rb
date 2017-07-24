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
  {
    title: 'Tiny Jewelry Making Tassels, New FALL Pantone Colors',
    producer: 'Seibels', price: 12.99, category: 'Accessories', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500613786/items/001.jpg",
    description:
      "Craft type: Hat making & hair crafts, Jewelry making, Kids' crafts, Party & gifting, Sewing
       Secondary color: Rainbow
       Materials: tassels, tassel, jewelry making tassels, tassels for making jewelry, tassels for bracelets, tassels for jewelry, tiny tassels, short tassels, mini tassels, small tassels, handmade tassels, cotton tassels, silver binding tassels
       Ships worldwide from United States"
  },
  {
    title: 'red/white striped slide',
    producer: 'WREN', price: 29.99, category: 'Shoes', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500613790/items/002.jpg",
    description:
      "Handmade item
      Primary color: Red
      Secondary color: White
      Materials: woven fabric, vegetable tan leather
      Made to order
      Ships worldwide from United States"
  },
  {
    title: 'Summer Outdoors Party Turquoise Choker',
    producer: 'MermaidBeadsJewelry', price: 24.61, category: 'Accessories', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500613790/items/003.jpg",
    description:
      "Handmade item
      Occasion: Graduation
      Materials: Wrap Bracelet, Choker Necklace, Tiger Eye Beads, Turquoise Beads, Pearl Beads, Chain and clasp, Antique Gold Plated
      Made to order
      Ships worldwide from United States"
  },
  {
    title: 'Summer Outdoors Cactus Clutch Purse',
    producer: 'boejackdesigns', price: 63.25, category: 'Bags & Purses', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500613791/items/004.jpg",
    description:
      "Handmade item
      Primary color: Green
      Secondary color: White
      Materials: cotton linen blend fabric, japanese fabric, kisslock metal frame, interfacing
      Made to order
      Ships worldwide from United States"
  },
  {
    title: 'Cotton Square Backpack (Mustard)',
    producer: 'BagDoRi', price: 88, category: 'Bags & Purses', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500613790/items/005.jpg",
    description:
      "Handmade item
      Materials: fabric, synthetic leather, zipper
      Ships worldwide from South Korea"
  },
  {
    title: 'Cotton Canvas Cushioned Backpack (Grey)',
    producer: 'BagDoRi', price: 88.3, category: 'Bags & Purses', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500614986/items/006.jpg",
    description:
      "Handmade item
      Materials: fabric, synthetic leather, zipper
      Ships worldwide from South Korea"
  },
  {
    title: 'New Square Backpack (Charcoal Gray)',
    producer: 'BagDoRi', price: 98, category: 'Bags & Purses', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500614985/items/007.jpg",
    description:
      "Handmade item
      Materials: fabric, synthetic leather, zipper
      Ships worldwide from South Korea"
  },
  {
    title: 'Rosewood Wayfarer Sunglasses',
    producer: 'Propwood', price: 75, category: 'Accessories', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500614987/items/008.jpg",
    description:
      "Handmade item
      Primary color: Bronze
      Secondary color: Brown
      Materials: wood, wooden, polarized, birch, wooden sunglasses
      Made to order
      Ships worldwide from Lithuania"
  },
  {
    title: 'COTTON JERSEY EYE MASK NAVYXGRAY',
    producer: 'MUJI', price: 12, category: 'Accessories', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500614988/items/009.png",
    description:
      "Material: Cotton 100%
      Measurement: 9x20cm"
  },
  {
    title: 'TRU-FRAME COLLECTION 25" SPINNER',
    producer: 'Samsonite', price: 349.99, category: 'Luggages', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500614986/items/010.jpg",
    description:
      "100% Polycarbonate construction.
      Four multi-directional dual spinner wheels for effortless mobility.
      Ultra-protective security frame with sealed gasket closure features and integrated TSA combination lock that provides peace of mind when checking cases through security.
      Deluxe interior featuring two divider panels, two cross-straps and plenty of organizational pockets.
      Weight: 9.3 lbs."
  },
  {
    title: 'BLACK LABEL LITE-CUBE DLX 20" SPINNER',
    producer: 'Samsonite', price: 500, category: 'Luggages', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500614987/items/011.jpg",
    description:
      "Made in Europe from extremely strong, and incredibly light Curv® material with an innovative metalize look.
      Leather soft touch handles and details.
      Fully featured interior.
      Recessed combination TSA lock.
      Integrated ID tag holder.
      Dual spinner wheels for ease of mobility."
  },
  {
    title: 'NECK CUSHION BLUE COVER',
    producer: 'MUJI', price: 24.5, category: 'Accessories', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500922133/items/012.png",
    description:
      "Material:Outer Shell: Nylon 80%,Elastane 20%
      Wadding: Polystyrene Beads
      Cover: Cotton 100%
      Dimension: 16.5 x 67cm"
  },
  {
    title: 'mens wallet summer outdoors',
    producer: 'IngeniousBros', price: 27.99, category: 'Bags & Purses', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500929156/items/013.jpg",
    description:
      " Selected Walnut hardwood(from North America) by I.B.
      Black Box for gift designed by I.B.
      Characteristic Edge and surface sanding with 7 different sandpapers by I.B.
      Hand-sewed rubber band by I.B.

      Hold Maximum 4~5 cards and some bills. Size: 6cm x 9cm (little bit bigger than credit card)
      Weight: about 9 gram (include rubber band)"
  },
  {
    title: 'Dachshund Doxie Handmade Sandals Flip',
    producer: 'Anvali', price: 49.9, category: 'Shoes', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500929156/items/014.jpg",
    description:
      "Thong Style Sandal.
      Genuine Leather Upper (dyed & sun dried) with contrast stitching.
      Flat Flexible (non slip) foam Sole that gives support to the back approx 1cm high ( if you want rubber thin sole please state in notes at checkout).
      Hand-cut uppers and soles.
      Designed in Italy
      Handmade in Kenya
      Can be made to order with any dog breed you like.
      Collars beads can be color customized, they are sewn by hand.
      Extremely comfortable
       Narrow shape but Can be made in wide please add a note at checkout."
  },
  {
    title: 'Grace Yolk Flat Leather Shoes',
    producer: 'TamarShalem', price: 154.98, category: 'Shoes', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500929156/items/015.jpg",
    description:
      "Grace super comfortable flat shoes with a 2 cm heel.
      Wear during the day or night.
      Easy to dress up or dress down. Perfect with jeans, dresses and skirts."
  },
  {
    title: 'San Francisco Giants Tennis Shoes',
    producer: 'sportshoequeen', price: 109.99, category: 'Shoes', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500929156/items/016.jpg",
    description:
      "Handmade item
      Primary color: Gray
      Made to order
      Only ships within United States.
      these tennis shoes run a little small especially in bigger sizes."
  },
  {
    title: 'Giant Wave T-shirt',
    producer: 'RibbedShop', price: 12.05, category: 'Clothing', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500929156/items/017.jpg",
    description:
      "Handmade item
      Primary color: White
      Secondary color: Blue
      Occasion: Birthday
      Materials: katoen, cotton
      Made to order
      Ships worldwide from The Netherlands"
  },
  {
    title: 'Pineapple Shirt',
    producer: 'BrokenAnchorApparel', price: 14.99, category: 'Clothing', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500929156/items/018.jpg",
    description:
      "Gildan® Adult 6.0 Ounce Ultra Cotton® T-Shirt
      6 oz., 100% cotton pre-shrunk jersey knit
      Double stitched seamless collar, taped neck and shoulders
      Soft washed garment dyed fabric with double-needle sleeve and bottom hems
      6.1 Ounce 100% pre-shrunk cotton"
  },
  {
    title: 'Boho Baby Clothes',
    producer: 'LittleFoxNest', price: 12.99, category: 'Clothing', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500929156/items/019.jpg",
    description:
      "This adorable Boho Onesie® Brand bodysuit or tshirt makes the perfect addition to your little ones wardrobe or special gift
      Perfect for Boho, Rustic, Woodland Critters, Fox Lovers and more.
      Handmade item
      Mad to order"
  },
  {
    title: 'Keep Calm And Fish On T-Shirt',
    producer: 'TeeHeeHeeShirt', price: 17.5, category: 'Clothing', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500929156/items/020.jpg",
    description:
      "Handmade item
      Holiday: Father's Day
      Material: Cotton
      Made to order
      Ships worldwide from Canada"
  },
  {
    title: 'Christmas Long Sleeve',
    producer: 'JoyfulMoose', price: 15.99, category: 'Clothing', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500929156/items/021.jpg",
    description:
      "Handmade item
      Primary color: Red
      Secondary color: Green
      Holiday: Christmas
      Material: one piece
      Made to order
      Ships worldwide from United States"
  },
])

# {
#   title: '',
#   producer: '', price: , category: '', quantity: 10,
#   img_url: "",
#   description:
#     ""
# },

# randomly set featured items
Item.all.each do |item|
  if rand <= 0.2
    item.featured = true
    item.save!
  end
end
