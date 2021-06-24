# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


@user = User.create!(username: 'Niko', email: 'niko@email.com', password: 'loons1')

puts "#{User.count} users created"

brands = {
  marvel: {
    name: 'Marvel',
  },
  dc: {
    name: 'DC',
  },
  darkhorse: {
    name: 'Dark Horse Comics',
  },
  image: {
    name: 'Image Comics'
  }
}

Brand.create(brands.values)
puts "#{Brand.count} comic brands created"

comics = {
  batman1: {
    title: "Batman Vol. 1: The Court of Owls (New 52)",
    date: "November 2011",
    writer: "Scott Snyder",
    artist: "Greg Capullo",
    synopsis: "The story pits the Batman and his allies against the Court of Owls organization as they attempt to cement their control over Gotham City, which they have been manipulating in secret for centuries.",
    image_url: "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/48553/48553._SX360_QL80_TTD_.jpg",
  },
  batman2: {
    title: "Batman Vol. 3: Death of the Family (New 52)",
    date: "October 2012",
    writer: "Scott Snyder",
    artist: "Greg Capullo",
    synopsis: "The story involves the return of Batman's archenemy, the Joker, and his plan to destroy all of the people Batman has come to rely on over the years",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/91grEvxbcoL.jpg",
  },
  superman: {
    title: "All Star Superman",
    date: "November 2005",
    writer: "Grant Morrison",
    artist: "Frank Quitely",
    synopsis: "Synopsis : Superman ponders his future after a rescue mission to the sun overly exposes him to radiation.",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/81JDRABs0zL.jpg",
  },
  flash: {
    title: "The Flash Vol. 1: Lightning Strikes Twice (Rebirth)",
    date: "May 2014",
    writer: "Joshua Williamson",
    artist: "Carmine di Giandomenico",
    synopsis: "As Barry Allen, a.k.a. the Flash, learns more about the source that fuels his incredible powers, this same Speed Force that flows through him is unleashed all over Central City!",
    image_url: "https://static.wikia.nocookie.net/marvel_dc/images/1/17/The_Flash_Lightning_Strikes_Twice.jpg/revision/latest?cb=20200512183708",
  },
  avengers: {
    title: "The Infinity Gauntlet",
    date: "July 1991",
    writer: "Jim Starlin",
    artist: "George Perez, Ron Lim",
    synopsis: "The heroes of Marvel up against the omnipotent Eternal, Thanos! The Mad Titan has become the most powerful being in the universe, and enslavement or destruction may be the only choices he gives it! The successive Starlin sagas that shook space and time start here!",
    image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522431778l/39685558._SY475_.jpg",
  },
  walkingdead: {
    title: "The Walking Dead Vol. 1: Days Gone By",
    date: "October 2003",
    writer: "Robert Kirkman",
    artist: "Tony Moore",
    synopsis: "A couple months ago Rick Grimes was a small town cop who had never fired a shot and only ever saw one dead body. Separated from his family he must now sort through the death and confusion to try and find his wife and son.",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/71HE5gazkLL.jpg",
  },
  watchmen: {
    title: "Watchmen",
    date: "September 1986",
    writer: "Alan Moore",
    artist: "Dave Gibbons",
    synopsis: "Watchmen depicts an alternate history in which superheroes emerged in the 1940s and 1960s and their presence changed history so that the United States won the Vietnam War and the Watergate scandal was never exposed.",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/41cbjfkz79L._SX322_BO1,204,203,200_.jpg",
  },
  hellboy: {
    title: "Hellboy in Mexico",
    date: "April 2016",
    writer: "Mike Mignola",
    artist: "Richard Corben",
    synopsis: "In 1956, Hellboy caravans across Mexico--vampire-hunting with luchadores, finding the Aztec Gods, fighting evil turkeys and Frankenstein's monster, and drinking way too much tequila, in the strangest collection of his adventures yet.",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/71FgGe34NzL.jpg",
  },
  spiderman: {
    title: "Amazing Spider-Man Epic Collection: Great Power",
    date: "October 2014",
    writer: "Stan Lee",
    artist: "Steve Ditko",
    synopsis: "In 1962, in the pages of a comic book slated for cancellation, Stan Lee and Steve Ditko gave birth to one of the most enduring icons in American popular culture - the one and only Amazing Spider-Man!",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/51vtj0CYiGL._SX325_BO1,204,203,200_.jpg",
  }
}

Comic.create(comics.values)
puts "#{Comic.count} comic books created"