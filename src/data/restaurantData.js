export const restaurantInfo = {
  name: "AJV Restaurent ",
  tagline: "Authentic Italian Cuisine",
  description: "Experience the finest Italian dining with fresh ingredients and traditional recipes passed down through generations.",
  address: "St francis institute",
  phone: "1234567890",
  email: "AVJ@gmail.com",
  hours: {
    monday: "5:00 PM - 10:00 PM",
    tuesday: "5:00 PM - 10:00 PM",
    wednesday: "5:00 PM - 10:00 PM",
    thursday: "5:00 PM - 10:00 PM",
    friday: "5:00 PM - 11:00 PM",
    saturday: "4:00 PM - 11:00 PM",
    sunday: "4:00 PM - 9:00 PM"
  },
  social: {
    facebook: "https://facebook.com/bellavista",
    instagram: "https://www.instagram.com/top_london_restaurants",
    twitter: "https://twitter.com/bellavista"
  }
};

export const menuCategories = [
  {
    id: "appetizers",
    name: "Appetizers",
    description: "Start your culinary journey"
  },
  {
    id: "pasta",
    name: "Pasta",
    description: "Handmade pasta with traditional sauces"
  },
  {
    id: "pizza",
    name: "Pizza",
    description: "Wood-fired authentic Italian pizza"
  },
  {
    id: "mains",
    name: "Main Courses",
    description: "Hearty dishes for the perfect meal"
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet endings to your dining experience"
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Fine wines and refreshing drinks"
  }
];

export const menuItems = [
  // Appetizers
  {
    id: "bruschetta",
    name: "Bruschetta Classica",
    description: "Grilled bread topped with fresh tomatoes, basil, garlic, and extra virgin olive oil",
    price: 150,
    category: "appetizers",
    image: "/images/bruch.jfif",
    featured: true
  },
  {
    id: "antipasto",
    name: "Antipasto Platter",
    description: "Selection of cured meats, cheeses, olives, and marinated vegetables",
    price: 150,
    category: "appetizers",
    image: "/images/antipasto.jfif"
  },
  {
    id: "calamari",
    name: "Calamari Fritti",
    description: "Crispy fried squid rings served with marinara sauce and lemon",
    price: 150,
    category: "appetizers",
    image: "/images/calamari.jfif"
  },

  // Pasta
  {
    id: "carbonara",
    name: "Spaghetti Carbonara",
    description: "Traditional Roman pasta with eggs, pecorino cheese, pancetta, and black pepper",
    price: 340,
    category: "pasta",
    image: "/images/carbonara.jpg",
    featured: true
  },
  {
    id: "bolognese",
    name: "Tagliatelle Bolognese",
    description: "Fresh egg pasta with slow-cooked meat sauce from Bologna",
    price: 240,
    category: "pasta",
    image: "/images/bolognese.jpg"
  },
  {
    id: "pesto",
    name: "Linguine al Pesto",
    description: "Linguine pasta with homemade basil pesto, pine nuts, and parmesan",
    price: 200,
    category: "pasta",
    image: "/images/pesto.jpg"
  },

  // Pizza
  {
    id: "margherita",
    name: "Pizza Margherita",
    description: "San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil",
    price: 390,
    category: "pizza",
    image: "/images/marg.jpg",
    featured: true
  },
  {
    id: "diavola",
    name: "Pizza Diavola",
    description: "Spicy salami, mozzarella, tomato sauce, and chili flakes",
    price: 400,
    category: "pizza",
    image: "/images/diavo.jfif"
  },
  {
    id: "quattro-stagioni",
    name: "Quattro Stagioni",
    description: "Four seasons pizza with artichokes, mushrooms, ham, and olives",
    price: 450,
    category: "pizza",
    image: "/images/qs.jfif"
  },

  // Main Courses
  {
    id: "osso-buco",
    name: "Osso Buco alla Milanese",
    description: "Braised veal shanks with vegetables, white wine, and broth, served with risotto",
    price: 500,
    category: "mains",
    image: "/images/bolognese.jpg",
    featured: true
  },
  {
    id: "branzino",
    name: "Branzino al Sale",
    description: "Mediterranean sea bass baked in sea salt crust with herbs",
    price: 550,
    category: "mains",
    image: "/images/calamari.jfif"
  },
  {
    id: "chicken-parmigiana",
    name: "Chicken Parmigiana",
    description: "Breaded chicken breast with tomato sauce, mozzarella, and parmesan",
    price: 600,
    category: "mains",
    image: "/images/carbonara.jpg"
  },

  // Desserts
  {
    id: "tiramisu",
    name: "Tiramisu",
    description: "Classic Italian dessert with ladyfingers, mascarpone, coffee, and cocoa",
    price: 113,
    category: "desserts",
    image: "/images/antipasto.jfif",
    featured: true
  },
  {
    id: "panna-cotta",
    name: "Panna Cotta",
    description: "Silky vanilla custard topped with berry compote",
    price: 210,
    category: "desserts",
    image: "/images/pesto.jpg"
  },
  {
    id: "gelato",
    name: "Artisan Gelato",
    description: "Selection of house-made gelato flavors",
    price: 100,
    category: "desserts",
    image: "/images/marg.jpg"
  },

  // Beverages
  {
    id: "house-wine",
    name: "House Wine Selection",
    description: "Red or white wine by the glass",
    price: 210,
    category: "beverages",
    image: "/images/bruch.jfif"
  },
  {
    id: "espresso",
    name: "Espresso",
    description: "Traditional Italian espresso",
    price: 210,
    category: "beverages",
    image: "/images/diavo.jfif"
  },
  {
    id: "san-pellegrino",
    name: "San Pellegrino",
    description: "Sparkling mineral water",
    price: 210,
    category: "beverages",
    image: "/images/qs.jfif"
  }
];

export const featuredItems = menuItems.filter(item => item.featured);
