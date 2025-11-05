// Translation data for Crystal Plaza Hotel Digital Menu
export const translations = {
  en: {
    hotelName: "Crystal Plaza Al Majaz Hotel",
    digitalMenu: "Food Menu",
    selectLanguage: "Food menu in english",
    backToLanguage: "🔙 Back to Language Selection",
    categories: {
      starters: "Starters",
      soup: "Soup", 
      salads: "Salads",
      sandwiches: "Sandwiches",
      mainCourse: "Main Course",
      dessert: "Dessert",
      hotBeverages: "Hot Beverages",
      coldBeverages: "Cold Beverages"
    },
    mainCourseCategories: {
      tasteOfIndia: "Taste of India",
      arabianTaste: "Arabian Taste", 
      italianTaste: "Italian Taste"
    },
    servedWith: "Served with",
    price: "AED",
    orderNow: "Order Now",
    callToOrder: "Call to Order",
    roomService: "Room Service Available 24/7",
    contact: "Contact: +971 6 123 4567",
    location: "Al Majaz – Sharjah"
  },
  ar: {
    hotelName: "فندق كريستال بلازا المجاز",
    digitalMenu: "قائمة الطعام",
    selectLanguage: "قائمة الطعام بالعربية",
    backToLanguage: "🔙 العودة لاختيار اللغة",
    categories: {
      starters: "المقبلات",
      soup: "الشوربات",
      salads: "السلطات", 
      sandwiches: "السندويشات",
      mainCourse: "الطبق الرئيسي",
      dessert: "الحلويات",
      hotBeverages: "المشروبات الساخنة",
      coldBeverages: "المشروبات الباردة"
    },
    mainCourseCategories: {
      tasteOfIndia: "نكهات الهند",
      arabianTaste: "نكهات عربية",
      italianTaste: "نكهات إيطالية"
    },
    servedWith: "يقدم مع",
    price: "درهم إماراتي",
    orderNow: "اطلب الآن",
    callToOrder: "اتصل للطلب",
    roomService: "خدمة الغرف متوفرة 24/7",
    contact: "اتصل: +971 6 123 4567",
    location: "المجاز – الشارقة"
  },
  zh: {
    hotelName: "水晶广场阿尔马扎酒店",
    digitalMenu: "美食菜单",
    selectLanguage: "美食菜单中文",
    backToLanguage: "🔙 返回语言选择",
    categories: {
      starters: "开胃菜",
      soup: "汤品",
      salads: "沙拉",
      sandwiches: "三明治", 
      mainCourse: "主菜",
      dessert: "甜点",
      hotBeverages: "热饮",
      coldBeverages: "冷饮"
    },
    mainCourseCategories: {
      tasteOfIndia: "印度风味",
      arabianTaste: "阿拉伯风味",
      italianTaste: "意大利风味"
    },
    servedWith: "配菜",
    price: "迪拉姆",
    orderNow: "立即订购",
    callToOrder: "电话订购",
    roomService: "客房服务 24/7",
    contact: "联系：+971 6 123 4567",
    location: "阿尔马扎 – 沙迦"
  },
  ru: {
    hotelName: "Отель Crystal Plaza Аль-Маджаз",
    digitalMenu: "Меню еды",
    selectLanguage: "Меню еды на русском",
    backToLanguage: "🔙 Вернуться к выбору языка",
    categories: {
      starters: "Закуски",
      soup: "Супы",
      salads: "Салаты",
      sandwiches: "Сэндвичи",
      mainCourse: "Основное блюдо", 
      dessert: "Десерты",
      hotBeverages: "Горячие напитки",
      coldBeverages: "Холодные напитки"
    },
    mainCourseCategories: {
      tasteOfIndia: "Индийские вкусы",
      arabianTaste: "Арабские вкусы",
      italianTaste: "Итальянские вкусы"
    },
    servedWith: "Подается с",
    price: "Дирхам",
    orderNow: "Заказать сейчас",
    callToOrder: "Позвонить для заказа",
    roomService: "Обслуживание номеров 24/7",
    contact: "Контакт: +971 6 123 4567",
    location: "Аль-Маджаз – Шарджа"
  }
}

// Menu items data structure
export const menuItems = {
  starters: [
    { id: 1, name: { en: "French Fries", ar: "بطاطس مقلية", zh: "炸薯条", ru: "Картофель фри" }, price: 12, servedWith: { en: "Ketchup and mayonnaise", ar: "كاتشب و مايونيز", zh: "番茄酱和蛋黄酱", ru: "Кетчуп и майонез" }, type: "vegetarian" },
    { id: 2, name: { en: "Vegetable Spring Rolls (6 Pcs)", ar: "لفائف الخضار الربيعية (6 قطع)", zh: "蔬菜春卷 (6个)", ru: "Вегетарианские весенние роллы (6 шт.)" }, price: 16, servedWith: { en: "Sweet chili sauce", ar: "صلصة الفلفل الحلو", zh: "甜辣酱", ru: "Сладкий чили соус" }, type: "vegetarian" },
    { id: 3, name: { en: "Meat Kibbeh (6 Pcs)", ar: "كبة اللحم (6 قطع)", zh: "肉丸基贝 (6个)", ru: "Мясные киббе (6 шт.)" }, price: 16, servedWith: { en: "Garlic sauce or tahini dip", ar: "صلصة الثوم أو صلصة الطحينة", zh: "蒜蓉酱或芝麻酱", ru: "Чесночный соус или тахини" }, type: "non-vegetarian" },
    { id: 4, name: { en: "Cheese Rolls (6 Pcs)", ar: "لفائف الجبن (6 قطع)", zh: "奶酪卷 (6个)", ru: "Сырные роллы (6 шт.)" }, price: 16, servedWith: { en: "Chili mayo sauce", ar: "صلصة المايونيز الحارة", zh: "辣椒蛋黄酱", ru: "Острый майонез" }, type: "vegetarian" },
    { id: 5, name: { en: "Vegetable Samosa (6 Pcs)", ar: "سامosa الخضار (6 قطع)", zh: "蔬菜咖喱角 (6个)", ru: "Овощные самосы (6 шт.)" }, price: 14, servedWith: { en: "Mint chutney", ar: "صلصة النعناع", zh: "薄荷酱", ru: "Мятный чатни" }, type: "vegetarian" },
    { id: 6, name: { en: "BBQ Chicken Wings", ar: "أجنحة الدجاج بالباربيكيو", zh: "BBQ鸡翅", ru: "Куриные крылышки BBQ" }, price: 25, servedWith: { en: "BBQ sauce and French fries", ar: "صلصة الباربيكيو والبطاطس المقلية", zh: "BBQ酱和炸薯条", ru: "BBQ соус и картофель фри" }, type: "non-vegetarian" }
  ],
  soup: [
    { id: 7, name: { en: "Lentil Soup", ar: "شوربة العدس", zh: "扁豆汤", ru: "Чечевичный суп" }, price: 15, servedWith: { en: "Lemon wedges and breadsticks", ar: "شرائح الليمون وعيدان الخبز", zh: "柠檬角和面包棒", ru: "Дольки лимона и хлебные палочки" }, type: "vegetarian" },
    { id: 8, name: { en: "Vegetable Soup", ar: "شوربة الخضار", zh: "蔬菜汤", ru: "Овощной суп" }, price: 15, servedWith: { en: "Toasted bread", ar: "خبز محمص", zh: "烤面包", ru: "Тостовый хлеб" }, type: "vegetarian" },
    { id: 9, name: { en: "Chicken Soup", ar: "شوربة الدجاج", zh: "鸡汤", ru: "Куриный суп" }, price: 16, servedWith: { en: "Breadsticks", ar: "عيدان الخبز", zh: "面包棒", ru: "Хлебные палочки" }, type: "non-vegetarian" },
    { id: 10, name: { en: "Chicken Cream Soup", ar: "شوربة كريمة الدجاج", zh: "奶油鸡汤", ru: "Крем-суп из курицы" }, price: 16, servedWith: { en: "Crispy croutons", ar: "خبز محمص مقرمش", zh: "脆面包丁", ru: "Хрустящие крутоны" }, type: "non-vegetarian" }
  ],
  salads: [
    { id: 11, name: { en: "Quinoa Salad", ar: "سلطة الكينوا", zh: "藜麦沙拉", ru: "Салат киноа" }, price: 20, servedWith: { en: "Lemon dressing", ar: "صلصة الليمون", zh: "柠檬调味汁", ru: "Лимонная заправка" }, type: "vegetarian" },
    { id: 12, name: { en: "Fattoush Salad", ar: "سلطة الفتوش", zh: "法图什沙拉", ru: "Салат фаттуш" }, price: 18, servedWith: { en: "Pomegranate dressing and crispy bread", ar: "صلصة الرمان والخبز المقرمش", zh: "石榴酱和脆面包", ru: "Гранатовая заправка и хрустящий хлеб" }, type: "vegetarian" },
    { id: 13, name: { en: "Caesar Salad", ar: "سلطة قيصر", zh: "凯撒沙拉", ru: "Салат Цезарь" }, price: 18, servedWith: { en: "Garlic croutons and Caesar dressing", ar: "خبز محمص بالثوم وصلصة قيصر", zh: "蒜蓉面包丁和凯撒酱", ru: "Чесночные крутоны и заправка Цезарь" }, type: "vegetarian" }
  ],
  sandwiches: [
    { id: 14, name: { en: "Beef Burger Platter", ar: "طبق برجر اللحم البقري", zh: "牛肉汉堡套餐", ru: "Бургер из говядины" }, price: 23, servedWith: { en: "French fries and ketchup", ar: "البطاطس المقلية والكاتشب", zh: "炸薯条和番茄酱", ru: "Картофель фри и кетчуп" }, type: "non-vegetarian" },
    { id: 15, name: { en: "Chicken Burger Platter", ar: "طبق برجر الدجاج", zh: "鸡肉汉堡套餐", ru: "Куриный бургер" }, price: 20, servedWith: { en: "Fries and coleslaw", ar: "البطاطس المقلية وسلطة الكولسلو", zh: "炸薯条和卷心菜沙拉", ru: "Картофель фри и коулсло" }, type: "non-vegetarian" },
    { id: 16, name: { en: "Club Sandwich Platter", ar: "طبق ساندويش النادي", zh: "俱乐部三明治套餐", ru: "Клубный сэндвич" }, price: 25, servedWith: { en: "Fries and coleslaw", ar: "البطاطس المقلية وسلطة الكولسلو", zh: "炸薯条和卷心菜沙拉", ru: "Картофель фри и коулсло" }, type: "non-vegetarian" },
    { id: 17, name: { en: "Chicken Shawarma", ar: "شاورما الدجاج", zh: "鸡肉沙威玛", ru: "Куриная шаурма" }, price: 18, servedWith: { en: "Garlic sauce and pickles", ar: "صلصة الثوم والمخللات", zh: "蒜蓉酱和腌菜", ru: "Чесночный соус и маринованные огурцы" }, type: "non-vegetarian" },
    { id: 18, name: { en: "Chicken Tikka Sandwich", ar: "ساندويش تيكا الدجاج", zh: "鸡肉蒂卡三明治", ru: "Сэндвич куриная тикка" }, price: 20, servedWith: { en: "Fries and mint chutney", ar: "البطاطس المقلية وصلصة النعناع", zh: "炸薯条和薄荷酱", ru: "Картофель фри и мятный чатни" }, type: "non-vegetarian" }
  ],
  mainCourse: {
    tasteOfIndia: [
      { id: 19, name: { en: "Chicken Biryani", ar: "برياني الدجاج", zh: "鸡肉咖喱饭", ru: "Куриный бирьяни" }, price: 30, servedWith: { en: "Raita and salad", ar: "الرائتا والسلطة", zh: "酸奶和沙拉", ru: "Райта и салат" }, type: "non-vegetarian" },
      { id: 20, name: { en: "Vegetable Biryani", ar: "برياني الخضار", zh: "蔬菜咖喱饭", ru: "Овощной бирьяни" }, price: 25, servedWith: { en: "Raita and salad", ar: "الرائتا والسلطة", zh: "酸奶和沙拉", ru: "Райта и салат" }, type: "vegetarian" },
      { id: 21, name: { en: "Paneer Tikka Masala (Rice)", ar: "بانير تيكا ماسالا (أرز)", zh: "芝士蒂卡咖喱 (米饭)", ru: "Панир тикка масала (рис)" }, price: 30, servedWith: { en: "Steamed rice", ar: "الأرز المطهو", zh: "蒸米饭", ru: "Отварной рис" }, type: "vegetarian" },
      { id: 22, name: { en: "Butter Chicken (Rice)", ar: "دجاج بالزبدة (أرز)", zh: "黄油鸡 (米饭)", ru: "Курица в сливочном соусе (рис)" }, price: 30, servedWith: { en: "Rice or naan", ar: "الأرز أو الخبز الهندي", zh: "米饭或印度饼", ru: "Рис или наан" }, type: "non-vegetarian" },
      { id: 23, name: { en: "Chicken Tikka & Fries (Boneless)", ar: "تيكا الدجاج والبطاطس المقلية (بدون عظم)", zh: "鸡肉蒂卡和薯条 (无骨)", ru: "Куриная тикка и картофель фри (без костей)" }, price: 30, servedWith: { en: "Fries and salad", ar: "البطاطس المقلية والسلطة", zh: "炸薯条和沙拉", ru: "Картофель фри и салат" }, type: "non-vegetarian" },
      { id: 24, name: { en: "Chapatti", ar: "تشاباتي", zh: "印度薄饼", ru: "Чапати" }, price: 2, servedWith: { en: "Butter", ar: "الزبدة", zh: "黄油", ru: "Сливочное масло" }, type: "vegetarian" },
      { id: 25, name: { en: "Paratha", ar: "براثا", zh: "印度抛饼", ru: "Паратха" }, price: 3, servedWith: { en: "Curry or chutney", ar: "الكاري أو الشاتني", zh: "咖喱或酸辣酱", ru: "Карри или чатни" }, type: "vegetarian" }
    ],
    arabianTaste: [
      { id: 26, name: { en: "Grilled Chicken Rosemary Sauce (Rice)", ar: "دجاج مشوي بصلصة إكليل الجبل (أرز)", zh: "迷迭香酱烤鸡 (米饭)", ru: "Гриль курица с розмарином (рис)" }, price: 30, servedWith: { en: "Rosemary sauce and rice", ar: "صلصة إكليل الجبل والأرز", zh: "迷迭香酱和米饭", ru: "Соус розмарин и рис" }, type: "non-vegetarian" },
      { id: 27, name: { en: "Chicken Wings Provencal & Rice", ar: "أجنحة الدجاج بروفنسال والأرز", zh: "普罗旺斯鸡翅饭", ru: "Куриные крылышки провансаль и рис" }, price: 30, servedWith: { en: "Provencal sauce and rice", ar: "صلصة بروفنسال والأرز", zh: "普罗旺斯酱和米饭", ru: "Провансальский соус и рис" }, type: "non-vegetarian" },
      { id: 28, name: { en: "Chicken Shish Taouk (Fries/Bread)", ar: "شيش طاوك الدجاج (بطاطس/خبز)", zh: "鸡肉什希烤串 (薯条/面包)", ru: "Куриный шиш таук (картофель/хлеб)" }, price: 35, servedWith: { en: "Fries or Arabic bread", ar: "البطاطس المقلية أو الخبز العربي", zh: "炸薯条或阿拉伯面包", ru: "Картофель фри или арабский хлеб" }, type: "non-vegetarian" },
      { id: 29, name: { en: "Mixed Grilled (Fries/Bread)", ar: "مشكل مشوي (بطاطس/خبز)", zh: "混合烤肉 (薯条/面包)", ru: "Смешанный гриль (картофель/хлеб)" }, price: 45, servedWith: { en: "Fries or Arabic bread and salad", ar: "البطاطس المقلية أو الخبز العربي والسلطة", zh: "炸薯条或阿拉伯面包和沙拉", ru: "Картофель фри или арабский хлеб и салат" }, type: "non-vegetarian" },
      { id: 30, name: { en: "Chicken Mandi", ar: "مندي الدجاج", zh: "鸡肉曼迪", ru: "Куриный манди" }, price: 30, servedWith: { en: "Mandi rice and sauce", ar: "أرز مندي وصلصة", zh: "曼迪米饭和酱汁", ru: "Рис манди и соус" }, type: "non-vegetarian" },
      { id: 31, name: { en: "Grilled Hammour Filled (Fries)", ar: "همور مشوي محشي (بطاطس)", zh: "烤石斑鱼 (薯条)", ru: "Жареный хаммур (картофель фри)" }, price: 40, servedWith: { en: "French fries and tartar sauce", ar: "البطاطس المقلية وصلصة التارتار", zh: "炸薯条和塔塔酱", ru: "Картофель фри и тартар соус" }, type: "fish" }
    ],
    italianTaste: [
      { id: 32, name: { en: "Spaghetti with Meat Balls", ar: "سباجيتي بالكرات اللحم", zh: "肉丸意大利面", ru: "Спагетти с фрикадельками" }, price: 25, servedWith: { en: "Tomato sauce and parmesan", ar: "صلصة الطماطم وجبن البارميزان", zh: "番茄酱和帕玛森芝士", ru: "Томатный соус и пармезан" }, type: "non-vegetarian" },
      { id: 33, name: { en: "Pizza Margarita", ar: "بيتزا مارغريتا", zh: "玛格丽特披萨", ru: "Пицца Маргарита" }, price: 20, servedWith: { en: "Mozzarella and tomato", ar: "جبن الموزاريلا والطماطم", zh: "马苏里拉芝士和番茄", ru: "Моцарелла и помидоры" }, type: "vegetarian" },
      { id: 34, name: { en: "Pizza Pepperoni", ar: "بيتزا بيبروني", zh: "意大利辣香肠披萨", ru: "Пицца Пепперони" }, price: 25, servedWith: { en: "Beef pepperoni and cheese", ar: "بيبروني اللحم البقري والجبن", zh: "牛肉辣香肠和芝士", ru: "Говяжья пепперони и сыр" }, type: "non-vegetarian" },
      { id: 35, name: { en: "Chicken BBQ Pizza", ar: "بيتزا الدجاج بالباربيكيو", zh: "BBQ鸡肉披萨", ru: "Пицца с курицей BBQ" }, price: 25, servedWith: { en: "BBQ sauce and cheese", ar: "صلصة الباربيكيو والجبن", zh: "BBQ酱和芝士", ru: "BBQ соус и сыр" }, type: "non-vegetarian" },
      { id: 36, name: { en: "Pasta Arrabbiata", ar: "باستا أرابياتا", zh: "愤怒意面", ru: "Паста Аррабиата" }, price: 20, servedWith: { en: "Spicy tomato sauce", ar: "صلصة الطماطم الحارة", zh: "辣番茄酱", ru: "Острый томатный соус" }, type: "vegetarian" },
      { id: 37, name: { en: "Pasta with Chicken Pesto Sauce", ar: "باستا بالدجاج وصلصة البيستو", zh: "青酱鸡肉意面", ru: "Паста с курицей и песто" }, price: 25, servedWith: { en: "Creamy pesto sauce", ar: "صلصة البيستو الكريمية", zh: "奶油青酱", ru: "Сливочный соус песто" }, type: "non-vegetarian" },
      { id: 38, name: { en: "Alfredo Pasta", ar: "باستا ألفريدو", zh: "阿尔弗雷多意面", ru: "Паста Альфредо" }, price: 22, servedWith: { en: "White creamy sauce and parmesan", ar: "صلصة كريمية بيضاء وجبن البارميزان", zh: "白奶油酱和帕玛森芝士", ru: "Белый сливочный соус и пармезан" }, type: "vegetarian" }
    ]
  },
  dessert: [
    { id: 39, name: { en: "Fruit Salad", ar: "سلطة الفواكه", zh: "水果沙拉", ru: "Фруктовый салат" }, price: 25, servedWith: { en: "Served chilled", ar: "تقدم باردة", zh: "冷藏享用", ru: "Подается охлажденным" }, type: "vegetarian" },
    { id: 40, name: { en: "Cut Fruits Platter", ar: "طبق الفواكه المقطعة", zh: "水果拼盘", ru: "Нарезка фруктов" }, price: 25, servedWith: { en: "Served chilled", ar: "تقدم باردة", zh: "冷藏享用", ru: "Подается охлажденным" }, type: "vegetarian" }
  ],
  hotBeverages: [
    { id: 41, name: { en: "Turkish Coffee", ar: "القهوة التركية", zh: "土耳其咖啡", ru: "Турецкий кофе" }, price: 12, servedWith: { en: "Dates or biscuits", ar: "التمور أو البسكويت", zh: "椰枣或饼干", ru: "Финики или печенье" }, type: "vegetarian" },
    { id: 42, name: { en: "Tea", ar: "الشاي", zh: "茶", ru: "Чай" }, price: 10, servedWith: { en: "Sugar or milk on request", ar: "سكر أو حليب عند الطلب", zh: "可加糖或奶", ru: "Сахар или молоко по запросу" }, type: "vegetarian" },
    { id: 43, name: { en: "Americano", ar: "أمريكانو", zh: "美式咖啡", ru: "Американо" }, price: 10, servedWith: { en: "Biscuits", ar: "البسكويت", zh: "饼干", ru: "Печенье" }, type: "vegetarian" },
    { id: 44, name: { en: "Cappuccino", ar: "كابتشينو", zh: "卡布奇诺", ru: "Капучино" }, price: 10, servedWith: { en: "Cocoa powder on top", ar: "مسحوق الكاكاو على الوجه", zh: "顶部可可粉", ru: "Какао порошок сверху" }, type: "vegetarian" }
  ],
  coldBeverages: [
    { id: 45, name: { en: "Fresh Juice", ar: "عصير طازج", zh: "鲜榨果汁", ru: "Свежевыжатый сок" }, price: 12, servedWith: { en: "Watermelon, Orange, Pineapple - Served chilled with ice", ar: "البطيخ والبرتقال والأناناس - تقدم مبردة بالثلج", zh: "西瓜、橙子、菠萝 - 冰镇享用", ru: "Арбуз, апельсин, ананас - подается охлажденным со льдом" }, type: "vegetarian" },
    { id: 46, name: { en: "Soft Drink", ar: "مشروب غازي", zh: "软饮料", ru: "Газированный напиток" }, price: 5, servedWith: { en: "Served cold", ar: "تقدم باردة", zh: "冰镇享用", ru: "Подается холодным" }, type: "vegetarian" },
    { id: 47, name: { en: "Water 1.5L", ar: "مياه 1.5 لتر", zh: "水 1.5升", ru: "Вода 1.5л" }, price: 5, servedWith: { en: "Served cold", ar: "تقدم باردة", zh: "冰镇享用", ru: "Подается холодной" }, type: "vegetarian" },
    { id: 48, name: { en: "Water 500ml", ar: "مياه 500 مل", zh: "水 500毫升", ru: "Вода 500мл" }, price: 3, servedWith: { en: "Served cold", ar: "تقدم باردة", zh: "冰镇享用", ru: "Подается холодной" }, type: "vegetarian" }
  ]
}