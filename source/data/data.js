export const Categories = [
    {
        id: "01",
        category: "All"
    },
    {
        id: "02",
        category: "Coffee"
    },
    {
        id: "03",
        category: "Tea"
    },
    {
        id: "04",
        category: "Smoothies"
    },
    {
        id: "05",
        category: "Juices"
    },
    {
        id: "06",
        category: "Sodas"
    },
    {
        id: "07",
        category: "Cocktails"
    },
    {
        id: "08",
        category: "Non-Alcoholic Drinks"
    },
    {
        id: "09",
        category: "Local Specialties"
    },
    {
        id: "10",
        category: "Seasonal Specials"
    },
    {
        id: "11",
        category: "Party or Group Orders"
    }
];


export const foodItems = [
    {
        id: "001",
        name: "Espresso",
        category: "Coffee",
        description: "A strong and rich coffee brewed by forcing hot water through finely-ground coffee beans.",
        price: 2.99,
        image: require('../images/espresso.jpg'),
        ingredients: ["Coffee beans", "Water"],
        allergens: [],
        servingSize: "1 shot",
        isVegetarian: true,
        isSpicy: false,
        sale: false
    },
    {
        id: "002",
        name: "Green Tea",
        category: "Tea",
        description: "A light and refreshing tea made from unoxidized leaves, rich in antioxidants.",
        price: 3.50,
        image: require('../images/green_tea.jpg'),
        ingredients: ["Green tea leaves", "Water"],
        allergens: [],
        servingSize: "1 cup",
        isVegetarian: true,
        isSpicy: false,
        sale: true
    },
    {
        id: "003",
        name: "Mango Smoothie",
        category: "Smoothies",
        description: "A creamy and delicious smoothie made with fresh mango, yogurt, and ice.",
        price: 4.99,
        image: require('../images/mango_smoothie.jpg'),
        ingredients: ["Mango", "Yogurt", "Ice"],
        allergens: ["Dairy"],
        servingSize: "1 cup",
        isVegetarian: true,
        isSpicy: false,
        sale: false
    },
    {
        id: "004",
        name: "Orange Juice",
        category: "Juices",
        description: "Freshly squeezed orange juice, packed with vitamin C and refreshing flavor.",
        price: 3.99,
        image: require('../images/orange_juice.jpg'),
        ingredients: ["Oranges"],
        allergens: [],
        servingSize: "1 cup",
        isVegetarian: true,
        isSpicy: false,
        sale: true
    },
    {
        id: "005",
        name: "Cola",
        category: "Sodas",
        description: "A sweet and fizzy carbonated beverage with a cola flavor.",
        price: 1.99,
        image: require('../images/cola.jpg'),
        ingredients: ["Carbonated water", "Sugar", "Flavorings"],
        allergens: [],
        servingSize: "1 can",
        isVegetarian: true,
        isSpicy: false,
        sale: false
    },
    {
        id: "006",
        name: "Mojito",
        category: "Cocktails",
        description: "A refreshing cocktail made with rum, mint, lime, and soda water.",
        price: 7.99,
        image: require('../images/mojito.jpg'),
        ingredients: ["Rum", "Mint leaves", "Lime", "Soda water", "Sugar"],
        allergens: [],
        servingSize: "1 glass",
        isVegetarian: true,
        isSpicy: false,
        sale: false
    },
    {
        id: "007",
        name: "Iced Tea",
        category: "Non-Alcoholic Drinks",
        description: "A chilled tea beverage served with ice, perfect for hot days.",
        price: 2.50,
        image: require('../images/iced_tea.jpg'),
        ingredients: ["Tea", "Ice", "Sugar (optional)"],
        allergens: [],
        servingSize: "1 cup",
        isVegetarian: true,
        isSpicy: false,
        sale: true
    },
    {
        id: "008",
        name: "Pina Colada",
        category: "Cocktails",
        description: "A tropical cocktail made with rum, coconut cream, and pineapple juice.",
        price: 8.99,
        image: require('../images/pina_colada.jpg'),
        ingredients: ["Rum", "Coconut cream", "Pineapple juice"],
        allergens: ["Coconut"],
        servingSize: "1 glass",
        isVegetarian: true,
        isSpicy: false,
        sale: true
    },
];

export const favourites = [
    {
        id: "001",
        name: "Cà phê Espresso",
        description: "Một loại cà phê đậm đặc được pha bằng cách ép nước nóng qua cà phê xay mịn.",
        category: "Đồ Uống Nóng",
        price: 3.99,
        image: require('../images/espresso.jpg'),
        sale: true
    },
    {
        id: "002",
        name: "Trà xanh Matcha",
        description: "Một loại trà Nhật Bản được làm từ bột trà xanh, có hương vị thơm ngon và tốt cho sức khỏe.",
        category: "Đồ Uống Nóng",
        price: 5.99,
        image: require('../images/iced_tea.jpg'),
        sale: true
    },
    {
        id: "003",
        name: "Sinh tố Dâu Tây",
        description: "Một loại đồ uống giải khát làm từ dâu tây tươi, sữa và đá bào, thơm ngon và bổ dưỡng.",
        category: "Đồ Uống Lạnh",
        price: 4.99,
        image: require('../images/pina_colada.jpg'),
        sale: false
    }
];


