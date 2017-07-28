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
    title: 'Voyage Anorak Men',
    producer: 'Herschel', price: 69.99, category: 'Clothing', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970279/items/022.jpg",
    description:
      "Signature evergreen internal trim and classic label
      Neckline self-storage pocket with snap closure
      Snap-fastened flap pocket with side-access hand warmer sleeve
      Attached three-piece hood with two-snap placket
      Embroidered under-arm air vents
      Cinched elastic cuffs
      Drop-back hemline and two-snap side seam"
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
    title: 'Strand Duffle',
    producer: 'Herschel', price: 64.99, category: 'Bags & Purses', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970279/items/024.jpg",
    description:
      "Signature striped fabric liner
      Two-way zipper with pebbled leather pulls
      External center storage sleeve
      Padded and articulated carrying handles
      H.S.Co branded metal snaps
      Classic woven label"
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
      "This luggage is with 100% Polycarbonate construction.
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
      Integrated ID tag holder for the luggage.
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

  {
    title: 'Hooded Coach Jacket',
    producer: 'Herschel', price: 109.99, category: 'Clothing', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970278/items/023.jpg",
    description:
      "Waterproof coated polyester stretch fabric
      Welded critical seams
      Soft-touch tricot fabric interior
      Internal signature evergreen classic label
      Front closure with branded metal snaps
      Two front welt pockets
      Attached three-piece hood"
  },
  {
    title: '172 Cap',
    producer: 'Herschel', price: 34.99, category: 'Accessories', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970278/items/025.jpg",
    description:
      "100% cotton twill
      Self-fabric strap with ID logo embossed silver-toned clip
      Stitched eyelets
      Signature striped front panel liner
      Engineered red and white striped rear tab
      Custom Herschel Supply Trademark embroidered felt patch"
  },
  {
    title: 'Voyage Poncho Women',
    producer: 'Herschel', price: 69.99, category: 'Clothing', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970279/items/026.jpg",
    description:
      "Lightweight polyester diamond dobby ripstop
      Wind-resistant with water-repellent coating
      Signature evergreen internal trim and classic label
      Neckline self-storage pocket with snap closure
      Two front patch pockets
      Attached three-piece hood with two-snap placket
      Snap detailed arm openings and drop-back hemline"
  },
  {
    title: 'Eugene Passport Holder Limited Edition',
    producer: 'Herschel', price: 159.99, category: 'Accessories', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970279/items/027.jpg",
    description:
      "Full grain leather exterior
      Signature striped fabric liner
      Top-access passport sleeve
      Multiple card slots
      Rear boarding pass sleeve
      Engineered red and white striped tab
      Debossed classic logo"
  },
  {
    title: 'Chapter Travel Kit Woven',
    producer: 'Herschel', price: 59.99, category: 'Bags & Purses', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970279/items/028.jpg",
    description:
      "Interlaced webbing exterior
      Internal mesh storage sleeve
      Waterproof zipper with Icon pull-tab and custom stitched binding
      EVA reinforced seatbelt webbing carry handle and Prusik finger loop
      Ballistic nylon base
      Tonal classic woven label"
  },
  {
    title: 'Folio Pouch XL Studio',
    producer: 'Herschel', price: 39.99, category: 'Bags & Purses', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970279/items/029.jpg",
    description:
      "Water resistant tarpaulin
      Interior zippered mesh sleeve
      Waterproof zippers
      Gloss tipped vegetable tanned leather zipper pull
      Screen printed detailing"
  },
  {
    title: 'Apex Gilford',
    producer: 'Herschel', price: 79.99, category: 'Bags & Purses', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970279/items/030.jpg",
    description:
      "Waterproof zipper with Icon pull-tab and reflective dock
      Clip-fastened adjustable seatbelt webbing strap
      Two-tone BHW woven tab"
  },
  {
    title: 'Alder Crossbody Woven',
    producer: 'Herschel', price: 39.99, category: 'Bags & Purses', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970279/items/031.jpg",
    description:
      "Interlaced webbing exterior
      Waterproof zipper with Icon pull-tab and custom stitched binding
      Clip-fastened removable seatbelt webbing crossbody strap
      Prusik knot strap attachments with metal eyelet detailed ballistic nylon
      Tonal classic woven label"
  },
  {
    title: 'Multicolored Oxford flat Shoes',
    producer: 'BackToCool', price: 109.0, category: 'Shoes', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970280/items/032.jpg",
    description:
      "Handmade item
      Primary color: Rainbow
      Secondary color: Rainbow
      Holiday: Mother's Day
      Materials: leather, fabric, multicolored shoes
      Made to order
      Ships worldwide from Greece"
  },
  {
    title: 'PET CYLINDER PUMP BOTTLE',
    producer: 'MUJI', price: 5.25, category: 'Accessories', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970282/items/033.png",
    description:
      "Dimension: Dia.3.9x14.6cm
      Volume: 100ml
      Heat Tolerance: 60℃
      Cold Tolerance: -20℃"
  },
  {
    title: 'ALL IN ONE ESSENCE',
    producer: 'MUJI', price: 10.01, category: 'Accessories', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970281/items/034.png",
    description:
      "Volume: 1.06 oz (30g)
      Ingredients: Water, Glycerin, Aloe Vera Juice, Butylene Glycol"
  },
  {
    title: 'Vintage Running Shoes',
    producer: 'FunAndVintageFinds', price: 249.99, category: 'Shoes', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970283/items/35.jpg",
    description:
      "Vintage item from the 1980s
      Materials: suede, corduroy, rubber
      Real Nice Vintage Condition as pictured.
      Ships worldwide from United States"
  },
  {
    title: 'Trade Luggage Small',
    producer: 'Herschel', price: 159.99, category: 'Luggages', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970282/items/36.jpg",
    description:
      "Molded polycarbonate exterior
      Black and white striped fabric liner
      Two-way exposed zipper
      Split design with zippered mesh storage and adjustable garment straps
      Retractable three-stage locking trolley handle
      Multi-directional muted wheels
      Attached Travel Sentry® Approved TSA combination lock
      Embossed rubber classic label"
  },
  {
    title: 'Leather Boots Portuguese Traditional',
    producer: 'BytheMountain', price: 64.75, category: 'Shoes', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970281/items/37.jpg",
    description:
      "Leather and handicraft production with soles made out of recycled car tire/tyre rubber that should last a lifetime.
      These are the famous Portuguese worker boots, well know by its robustness.
      For decades this traditional item was forgotten but the vintage tendency and preference for traditional materials are back.
      The leather was treated with natural tallow making these waterproof boots."
  },
  {
    title: 'Explorer Journal with Maps',
    producer: 'TremundoJournals', price: 25, category: 'Accessories', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970282/items/038.jpg",
    description:
      "journal measures: 5 x 6 inches (closed)
      paper: 60lb unlined paper
      pages: 220pp (front/back)
      maps: variety of world atlas maps
      Tri fold w/elastic closure"
  },
  {
    title: 'Camping Mug',
    producer: 'Nokkvalley', price: 21.37, category: 'Accessories', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970282/items/039.jpg",
    description:
      "Handmade item
      Occasion: Anniversary
      Materials: steel, enamel
      Ships worldwide from Poland"
  },
  {
    title: 'Boho Kimono',
    producer: 'FashionelleStudio', price: 45.45, category: 'Clothing', quantity: 10,
    img_url: "https://res.cloudinary.com/kevinsy07/image/upload/v1500970285/items/040.jpg",
    description:
      "Handmade item
      Primary color: Blue
      Secondary color: White
      Holiday: Christmas
      Occasion: Birthday
      Materials: Soft, Lightweight, Chiffon, Polyester
      Ships worldwide from Canada"
  },
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

reviews = [
  "Great quality! Exactly what I've been searching for!",
  "Got them 2 weeks ago, and I've been using them everyday.",
  "Love the design and reasonably priced.", "Bought it for my best friend.",
  "Love it.", "Like it for every second.", "Great for the price.",
  "Good design, implemented OK", "Can't complaint about it.",
  "Better than expected.", "Good quality!", "Very nice seller.",
]

Item.all.each do |item|
  num_reviews = rand(8..15)
  sampled_reviews = reviews.sample(num_reviews)
  sampled_users = User.all.sample(num_reviews)
  sampled_users.each_with_index do |user, i|
    Review.create!({user_id: user.id, item_id: item.id,
      body: sampled_reviews[i], rating: rand(3..5)})
  end
end
