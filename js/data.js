/* =====================================================
   CozyFinds — Site Data
   -----------------------------------------------------
   This is the ONLY file you need to edit to:
     - add or update products
     - add or update articles
     - change category names/descriptions

   Everything else (main.js, the HTML pages) reads from
   the arrays below and builds the page automatically.
   ===================================================== */

/* -----------------------------------------------------
   ROOM CATEGORIES
   Used on the homepage "Popular Categories" section and
   as the filter pills on room-finds.html.
   ----------------------------------------------------- */
const ROOM_CATEGORIES = [
  {
    slug: "cozy-bedrooms",
    name: "Cozy Bedrooms",
    description: "Soft textures and warm lighting for a bedroom that feels like a hug.",
    image: "images/categories/cozy-bedrooms.jpg"
  },
  {
    slug: "desk-setups",
    name: "Desk Setups",
    description: "Aesthetic, functional upgrades for a workspace you actually enjoy.",
    image: "images/categories/desk-setups.jpg"
  },
  {
    slug: "small-rooms",
    name: "Small Rooms",
    description: "Clever finds that make the most of every square foot.",
    image: "images/categories/small-rooms.jpg"
  },
  {
    slug: "lighting",
    name: "Lighting",
    description: "Warm, ambient lighting to change the mood of any room.",
    image: "images/categories/lighting.jpg"
  },
  {
    slug: "wall-decor",
    name: "Wall Decor",
    description: "Art and hangings to fill your walls with personality.",
    image: "images/categories/wall-decor.jpg"
  },
  {
    slug: "organization",
    name: "Organization",
    description: "Pretty (and practical) ways to keep your space tidy.",
    image: "images/categories/organization.jpg"
  }
];

/* -----------------------------------------------------
   GIFT CATEGORIES
   ----------------------------------------------------- */
const GIFT_CATEGORIES = [
  {
    slug: "birthday-gifts",
    name: "Birthday Gifts",
    description: "Thoughtful picks to make their birthday feel extra special.",
    image: "images/categories/birthday-gifts.jpg"
  },
  {
    slug: "gifts-for-friends",
    name: "Gifts for Friends",
    description: "Sweet, fun finds for the friend who has everything.",
    image: "images/categories/gifts-for-friends.jpg"
  },
  {
    slug: "gifts-for-couples",
    name: "Gifts for Couples",
    description: "Cute and meaningful gifts to share.",
    image: "images/categories/gifts-for-couples.jpg"
  },
  {
    slug: "gifts-under-25",
    name: "Gifts Under $25",
    description: "Budget-friendly gifts that still feel thoughtful.",
    image: "images/categories/gifts-under-25.jpg"
  },
  {
    slug: "cute-gifts",
    name: "Cute Gifts",
    description: "Adorable finds that are almost too cute to give away.",
    image: "images/categories/cute-gifts.jpg"
  },
  {
    slug: "useful-gifts",
    name: "Useful Gifts",
    description: "Practical picks people will actually use every day.",
    image: "images/categories/useful-gifts.jpg"
  }
];

/* -----------------------------------------------------
   PRODUCTS
   -----------------------------------------------------
   HOW TO ADD A NEW PRODUCT:
   Copy one of the objects below, paste it at the end of
   the list (just before the closing "];"), and change
   the values. Give it a unique id like "p49".

     id             unique ID — just use the next number
     name           product name shown on the card
     section        "room" or "gift" — which hub page it belongs to
     category       must match a "slug" from the category lists above
     price          shown on the card — EXAMPLE placeholder pricing,
                    update with the real price before publishing
     description    one short sentence shown on the card
     image          path to the product photo (see images/README.md)
     imageAlt       describes the image for accessibility/SEO
     affiliateLink  placeholder like "AFFILIATE_LINK_01" —
                    replace with your real affiliate URL later
     featured       true = can appear in "Featured Finds" on the homepage
     latest         true = can appear in "Latest Recommendations"
     tags           extra keywords to help the search bar find this item

   NOTE: All prices below are example placeholder values for
   layout purposes only, not real current prices. Update them
   with accurate pricing before publishing.
   ----------------------------------------------------- */
const PRODUCTS = [
  // ---------- Cozy Bedrooms ----------
  {
    id: "p01", name: "Chunky Knit Throw Blanket", section: "room", category: "cozy-bedrooms",
    price: "$84.68",
    description: "An oversized, ultra-soft knit throw that turns any bed or reading nook into your coziest corner.",
    image: "images/products/chunky-knit-throw.jpg", imageAlt: "Chunky knit throw blanket folded on a bed",
    affiliateLink: "https://s.noon.com/Km8MWktPtKY", featured: true, latest: false,
    tags: ["blanket", "throw", "cozy", "bedroom"]
  },
  {
    id: "p02", name: "Warm Glow Fairy Lights (20ft)", section: "room", category: "cozy-bedrooms",
    price: "$9.99",
    description: "Warm white LED string lights that add a soft, dreamy glow to any bedroom.",
    image: "images/products/warm-glow-fairy-lights.jpg", imageAlt: "Warm white fairy lights draped along a bedroom wall",
    affiliateLink: "https://s.noon.com/rPmtQLlzQVE", featured: true, latest: false,
    tags: ["lights", "fairy lights", "lighting", "cozy", "affordable"]
  },
  {
    id: "p03", name: "Faux Fur Area Rug", section: "room", category: "cozy-bedrooms",
    price: "$42.00",
    description: "A plush faux fur rug that feels amazing underfoot and adds instant texture to your floor.",
    image: "images/products/p03.jpg", imageAlt: "Cream faux fur rug on a bedroom floor",
    affiliateLink: "AFFILIATE_LINK_03", featured: false, latest: false,
    tags: ["rug", "faux fur", "texture", "bedroom"]
  },
  {
    id: "p04", name: "Cloud Support Body Pillow", section: "room", category: "cozy-bedrooms",
    price: "$28.50",
    description: "A full-length body pillow designed for extra comfort while reading, lounging, or sleeping.",
    image: "images/products/p04.jpg", imageAlt: "Long body pillow resting on a made bed",
    affiliateLink: "AFFILIATE_LINK_04", featured: false, latest: true,
    tags: ["pillow", "body pillow", "comfort", "bedroom"]
  },

  // ---------- Desk Setups ----------
  {
    id: "p05", name: "Bamboo Monitor Stand with Storage", section: "room", category: "desk-setups",
    price: "$27.00",
    description: "Raises your monitor to eye level while tucking supplies neatly underneath.",
    image: "images/products/p05.jpg", imageAlt: "Bamboo monitor stand with storage compartment on a desk",
    affiliateLink: "AFFILIATE_LINK_05", featured: true, latest: false,
    tags: ["desk", "monitor stand", "office", "organization"]
  },
  {
    id: "p06", name: "Wireless Charging Desk Mat", section: "room", category: "desk-setups",
    price: "$32.00",
    description: "A full desk mat with a built-in wireless charging spot for your phone.",
    image: "images/products/p06.jpg", imageAlt: "Large desk mat with a wireless charging area",
    affiliateLink: "AFFILIATE_LINK_06", featured: false, latest: false,
    tags: ["desk mat", "wireless charging", "desk setup"]
  },
  {
    id: "p07", name: "Adjustable Laptop Riser", section: "room", category: "desk-setups",
    price: "$24.99",
    description: "A foldable aluminum stand that improves posture and desk airflow.",
    image: "images/products/p07.jpg", imageAlt: "Laptop propped up on an adjustable aluminum riser",
    affiliateLink: "AFFILIATE_LINK_07", featured: false, latest: false,
    tags: ["laptop stand", "riser", "ergonomic", "desk setup"]
  },
  {
    id: "p08", name: "Cable Management Box Set", section: "room", category: "desk-setups",
    price: "$16.50",
    description: "Hides power strips and cords for a clean, minimal desk setup.",
    image: "images/products/p08.jpg", imageAlt: "Cable management box hiding cords under a desk",
    affiliateLink: "AFFILIATE_LINK_08", featured: false, latest: true,
    tags: ["cable management", "cords", "desk setup", "organization"]
  },

  // ---------- Small Rooms ----------
  {
    id: "p09", name: "Over-the-Door Storage Organizer", section: "room", category: "small-rooms",
    price: "$19.99",
    description: "Adds instant storage without using any floor space — perfect for small rooms.",
    image: "images/products/p09.jpg", imageAlt: "Storage organizer hanging over a bedroom door",
    affiliateLink: "AFFILIATE_LINK_09", featured: true, latest: false,
    tags: ["storage", "small room", "organization", "door organizer"]
  },
  {
    id: "p10", name: "Under-Bed Storage Bins (Set of 2)", section: "room", category: "small-rooms",
    price: "$29.00",
    description: "Rolling storage bins that make use of dead space under your bed.",
    image: "images/products/p10.jpg", imageAlt: "Storage bin sliding out from under a bed",
    affiliateLink: "AFFILIATE_LINK_10", featured: false, latest: false,
    tags: ["storage", "under bed", "small room", "organization"]
  },
  {
    id: "p11", name: "Foldable Step Stool", section: "room", category: "small-rooms",
    price: "$15.00",
    description: "A compact stool that tucks away flat when you don't need it.",
    image: "images/products/p11.jpg", imageAlt: "Foldable step stool leaning against a wall",
    affiliateLink: "AFFILIATE_LINK_11", featured: false, latest: false,
    tags: ["step stool", "foldable", "small space"]
  },
  {
    id: "p12", name: "Wall-Mounted Floating Shelves (Set of 3)", section: "room", category: "small-rooms",
    price: "$23.00",
    description: "Add storage and display space to small rooms without bulky furniture.",
    image: "images/products/p12.jpg", imageAlt: "Three floating shelves mounted on a bedroom wall",
    affiliateLink: "AFFILIATE_LINK_12", featured: false, latest: true,
    tags: ["shelves", "floating shelves", "small room", "wall storage"]
  },

  // ---------- Lighting ----------
  {
    id: "p13", name: "Adjustable Reading Lamp", section: "room", category: "lighting",
    price: "$21.00",
    description: "A soft, directional lamp that's perfect for nightstands and late-night reading.",
    image: "images/products/p13.jpg", imageAlt: "Adjustable reading lamp on a nightstand",
    affiliateLink: "AFFILIATE_LINK_13", featured: true, latest: false,
    tags: ["lamp", "reading lamp", "lighting", "nightstand"]
  },
  {
    id: "p14", name: "Sunset Projection Lamp", section: "room", category: "lighting",
    price: "$18.99",
    description: "Projects a warm, sunset-style glow across your room for cozy evening vibes.",
    image: "images/products/p14.jpg", imageAlt: "Sunset projection lamp casting an orange glow on a wall",
    affiliateLink: "AFFILIATE_LINK_14", featured: false, latest: false,
    tags: ["lamp", "sunset lamp", "lighting", "aesthetic", "cozy"]
  },
  {
    id: "p15", name: "Himalayan Salt Lamp", section: "room", category: "lighting",
    price: "$22.50",
    description: "A warm amber glow that adds a soothing accent to any space.",
    image: "images/products/p15.jpg", imageAlt: "Himalayan salt lamp glowing on a shelf",
    affiliateLink: "AFFILIATE_LINK_15", featured: false, latest: false,
    tags: ["salt lamp", "lighting", "cozy", "ambient"]
  },
  {
    id: "p16", name: "Touch-Dimmable Table Lamp", section: "room", category: "lighting",
    price: "$26.00",
    description: "Adjustable brightness with a simple touch — no switches to fumble for.",
    image: "images/products/p16.jpg", imageAlt: "Touch-dimmable table lamp on a desk",
    affiliateLink: "AFFILIATE_LINK_16", featured: false, latest: false,
    tags: ["lamp", "dimmable", "lighting", "desk lamp"]
  },

  // ---------- Wall Decor ----------
  {
    id: "p17", name: "Botanical Print Set (3 Pieces)", section: "room", category: "wall-decor",
    price: "$19.00",
    description: "A trio of minimal botanical prints that add warmth to any wall.",
    image: "images/products/p17.jpg", imageAlt: "Three framed botanical prints on a wall",
    affiliateLink: "AFFILIATE_LINK_17", featured: false, latest: false,
    tags: ["wall art", "prints", "botanical", "decor"]
  },
  {
    id: "p18", name: "Woven Wall Hanging", section: "room", category: "wall-decor",
    price: "$24.00",
    description: "A handwoven-style tapestry that adds texture and a boho touch.",
    image: "images/products/p18.jpg", imageAlt: "Woven macrame-style wall hanging above a bed",
    affiliateLink: "AFFILIATE_LINK_18", featured: true, latest: false,
    tags: ["wall hanging", "boho", "decor", "texture"]
  },
  {
    id: "p19", name: "Modern Line-Art Canvas", section: "room", category: "wall-decor",
    price: "$27.50",
    description: "Simple, modern line art that fits almost any decor style.",
    image: "images/products/p19.jpg", imageAlt: "Modern line-art canvas print on a wall",
    affiliateLink: "AFFILIATE_LINK_19", featured: false, latest: false,
    tags: ["wall art", "canvas", "line art", "modern decor"]
  },
  {
    id: "p20", name: "Cork Memo Board with Frame", section: "room", category: "wall-decor",
    price: "$17.99",
    description: "A stylish way to pin photos, notes, and reminders.",
    image: "images/products/p20.jpg", imageAlt: "Framed cork memo board with pinned photos",
    affiliateLink: "AFFILIATE_LINK_20", featured: false, latest: true,
    tags: ["memo board", "cork board", "desk", "organization"]
  },

  // ---------- Organization ----------
  {
    id: "p21", name: "Stackable Drawer Organizers", section: "room", category: "organization",
    price: "$14.50",
    description: "Modular trays that make dresser and desk drawers instantly tidier.",
    image: "images/products/p21.jpg", imageAlt: "Stackable organizer trays inside an open drawer",
    affiliateLink: "AFFILIATE_LINK_21", featured: false, latest: false,
    tags: ["organization", "drawer organizer", "storage"]
  },
  {
    id: "p22", name: "Velvet Hangers (20-Pack)", section: "room", category: "organization",
    price: "$18.00",
    description: "Slim, non-slip hangers that free up closet space instantly.",
    image: "images/products/p22.jpg", imageAlt: "Closet rod filled with matching velvet hangers",
    affiliateLink: "AFFILIATE_LINK_22", featured: true, latest: false,
    tags: ["hangers", "closet", "organization"]
  },
  {
    id: "p23", name: "Desktop File Sorter", section: "room", category: "organization",
    price: "$16.00",
    description: "Keeps papers, mail, and notebooks organized and off your desk surface.",
    image: "images/products/p23.jpg", imageAlt: "Desktop file sorter holding notebooks and papers",
    affiliateLink: "AFFILIATE_LINK_23", featured: false, latest: false,
    tags: ["file sorter", "desk organization", "office"]
  },
  {
    id: "p24", name: "Clear Makeup & Skincare Organizer", section: "room", category: "organization",
    price: "$20.00",
    description: "A clear acrylic organizer that keeps your counter tidy and everything visible.",
    image: "images/products/p24.jpg", imageAlt: "Clear acrylic organizer holding skincare products",
    affiliateLink: "AFFILIATE_LINK_24", featured: false, latest: false,
    tags: ["makeup organizer", "acrylic", "organization", "bathroom"]
  },

  // ---------- Birthday Gifts ----------
  {
    id: "p25", name: "Personalized Star Map Print", section: "gift", category: "birthday-gifts",
    price: "$29.00",
    description: "A custom star map showing the night sky from a special date and place.",
    image: "images/products/p25.jpg", imageAlt: "Framed personalized star map print",
    affiliateLink: "AFFILIATE_LINK_25", featured: true, latest: false,
    tags: ["personalized gift", "star map", "birthday", "unique gift"]
  },
  {
    id: "p26", name: "Scented Candle Gift Set (3 Candles)", section: "gift", category: "birthday-gifts",
    price: "$24.00",
    description: "A trio of cozy, giftable candle scents in a ready-to-wrap box.",
    image: "images/products/p26.jpg", imageAlt: "Set of three scented candles in a gift box",
    affiliateLink: "AFFILIATE_LINK_26", featured: false, latest: false,
    tags: ["candles", "gift set", "birthday", "cozy"]
  },
  {
    id: "p27", name: "Birthday Card + Mini Succulent Bundle", section: "gift", category: "birthday-gifts",
    price: "$15.00",
    description: "A cute, low-maintenance plant paired with a birthday card — sweet and simple.",
    image: "images/products/p27.jpg", imageAlt: "Mini succulent next to a birthday card",
    affiliateLink: "AFFILIATE_LINK_27", featured: false, latest: false,
    tags: ["succulent", "birthday card", "plant gift", "affordable"]
  },
  {
    id: "p28", name: "Polaroid-Style Photo Album", section: "gift", category: "birthday-gifts",
    price: "$18.50",
    description: "A retro-style photo album perfect for saving memories together.",
    image: "images/products/p28.jpg", imageAlt: "Polaroid-style photo album filled with instant photos",
    affiliateLink: "AFFILIATE_LINK_28", featured: false, latest: true,
    tags: ["photo album", "polaroid", "birthday", "sentimental gift"]
  },

  // ---------- Gifts for Friends ----------
  {
    id: "p29", name: "Friendship Bracelet Set", section: "gift", category: "gifts-for-friends",
    price: "$13.00",
    description: "A set of stackable bracelets designed to be shared between friends.",
    image: "images/products/p29.jpg", imageAlt: "Matching friendship bracelets on a table",
    affiliateLink: "AFFILIATE_LINK_29", featured: false, latest: false,
    tags: ["bracelet", "friendship gift", "affordable"]
  },
  {
    id: "p30", name: "Mini Desk Plant Set (3 Plants)", section: "gift", category: "gifts-for-friends",
    price: "$19.00",
    description: "Low-maintenance mini plants that brighten up any desk.",
    image: "images/products/p30.jpg", imageAlt: "Three small potted plants on a desk",
    affiliateLink: "AFFILIATE_LINK_30", featured: true, latest: false,
    tags: ["plants", "desk plant", "gift for friend"]
  },
  {
    id: "p31", name: "Cozy Socks Gift Box", section: "gift", category: "gifts-for-friends",
    price: "$16.00",
    description: "Three pairs of soft, fuzzy socks packaged in a cute gift-ready box.",
    image: "images/products/p31.jpg", imageAlt: "Fuzzy socks folded in a gift box",
    affiliateLink: "AFFILIATE_LINK_31", featured: false, latest: false,
    tags: ["socks", "cozy gift", "gift box"]
  },
  {
    id: "p32", name: "Cute Enamel Pin Collection", section: "gift", category: "gifts-for-friends",
    price: "$12.50",
    description: "A set of playful enamel pins for jackets, bags, or pinboards.",
    image: "images/products/p32.jpg", imageAlt: "Collection of enamel pins on a denim jacket",
    affiliateLink: "AFFILIATE_LINK_32", featured: false, latest: true,
    tags: ["enamel pins", "cute gift", "affordable", "gift for friend"]
  },

  // ---------- Gifts for Couples ----------
  {
    id: "p33", name: "His & Hers Mug Set", section: "gift", category: "gifts-for-couples",
    price: "$22.00",
    description: "A matching mug set for morning coffee (or hot cocoa) together.",
    image: "images/products/p33.jpg", imageAlt: "Matching pair of mugs on a kitchen counter",
    affiliateLink: "AFFILIATE_LINK_33", featured: false, latest: false,
    tags: ["mug set", "couples gift", "matching gift"]
  },
  {
    id: "p34", name: "Scratch-Off Date Night Poster", section: "gift", category: "gifts-for-couples",
    price: "$17.00",
    description: "50 date night ideas to scratch off together, one at a time.",
    image: "images/products/p34.jpg", imageAlt: "Scratch-off date night poster partially scratched",
    affiliateLink: "AFFILIATE_LINK_34", featured: true, latest: false,
    tags: ["date night", "couples gift", "poster", "unique gift"]
  },
  {
    id: "p35", name: "Matching Cozy Robe Set", section: "gift", category: "gifts-for-couples",
    price: "$48.00",
    description: "Soft, plush robes for lazy mornings in — sold as a matching set.",
    image: "images/products/p35.jpg", imageAlt: "Two matching plush robes hanging side by side",
    affiliateLink: "AFFILIATE_LINK_35", featured: false, latest: false,
    tags: ["robe", "matching set", "couples gift", "cozy"]
  },
  {
    id: "p36", name: "Personalized Couple Photo Frame", section: "gift", category: "gifts-for-couples",
    price: "$21.50",
    description: "A custom frame designed to hold a favorite shared memory.",
    image: "images/products/p36.jpg", imageAlt: "Personalized photo frame with a couple's photo",
    affiliateLink: "AFFILIATE_LINK_36", featured: false, latest: false,
    tags: ["photo frame", "personalized", "couples gift", "sentimental"]
  },

  // ---------- Gifts Under $25 ----------
  {
    id: "p37", name: "Aromatherapy Roller Set (4 Blends)", section: "gift", category: "gifts-under-25",
    price: "$16.00",
    description: "Four travel-size essential oil rollers in a cute giftable set.",
    image: "images/products/p37.jpg", imageAlt: "Set of four aromatherapy roller bottles",
    affiliateLink: "AFFILIATE_LINK_37", featured: false, latest: false,
    tags: ["aromatherapy", "gift under 25", "self care"]
  },
  {
    id: "p38", name: "Cute Phone Grip & Stand", section: "gift", category: "gifts-under-25",
    price: "$9.99",
    description: "A collapsible grip that doubles as a phone stand — small, useful, adorable.",
    image: "images/products/p38.jpg", imageAlt: "Cute phone grip attached to the back of a phone",
    affiliateLink: "AFFILIATE_LINK_38", featured: true, latest: false,
    tags: ["phone grip", "cute gift", "affordable", "stocking stuffer"]
  },
  {
    id: "p39", name: "Mini Succulent Trio", section: "gift", category: "gifts-under-25",
    price: "$17.50",
    description: "Three tiny, easy-care succulents in matching pots.",
    image: "images/products/p39.jpg", imageAlt: "Three mini succulents in matching ceramic pots",
    affiliateLink: "AFFILIATE_LINK_39", featured: false, latest: false,
    tags: ["succulents", "plant gift", "affordable gift"]
  },
  {
    id: "p40", name: "Scented Drawer Sachet Set", section: "gift", category: "gifts-under-25",
    price: "$11.00",
    description: "Lightly scented sachets that keep drawers smelling fresh.",
    image: "images/products/p40.jpg", imageAlt: "Scented sachets placed in a dresser drawer",
    affiliateLink: "AFFILIATE_LINK_40", featured: false, latest: true,
    tags: ["sachets", "gift under 25", "affordable"]
  },

  // ---------- Cute Gifts ----------
  {
    id: "p41", name: "Cloud-Shaped Mini Humidifier", section: "gift", category: "cute-gifts",
    price: "$23.00",
    description: "An adorable cloud-shaped humidifier that doubles as a cute desk accessory.",
    image: "images/products/p41.jpg", imageAlt: "Cloud-shaped mini humidifier on a desk",
    affiliateLink: "AFFILIATE_LINK_41", featured: true, latest: false,
    tags: ["humidifier", "cute gift", "desk accessory"]
  },
  {
    id: "p42", name: "Cat-Shaped Ceramic Mug", section: "gift", category: "cute-gifts",
    price: "$14.00",
    description: "A playful cat-shaped mug that makes any coffee break cuter.",
    image: "images/products/p42.jpg", imageAlt: "Cat-shaped ceramic mug filled with coffee",
    affiliateLink: "AFFILIATE_LINK_42", featured: false, latest: false,
    tags: ["mug", "cat gift", "cute gift"]
  },
  {
    id: "p43", name: "Kawaii Desk Organizer Set", section: "gift", category: "cute-gifts",
    price: "$19.50",
    description: "A pastel, character-inspired organizer set for pens and desk clutter.",
    image: "images/products/p43.jpg", imageAlt: "Pastel kawaii-style desk organizer set",
    affiliateLink: "AFFILIATE_LINK_43", featured: false, latest: false,
    tags: ["desk organizer", "kawaii", "cute gift"]
  },
  {
    id: "p44", name: "Mini Waffle Maker", section: "gift", category: "cute-gifts",
    price: "$25.00",
    description: "A compact, adorable waffle maker perfect for small kitchens and fun mornings.",
    image: "images/products/p44.jpg", imageAlt: "Mini waffle maker on a kitchen counter",
    affiliateLink: "AFFILIATE_LINK_44", featured: false, latest: true,
    tags: ["waffle maker", "cute gift", "kitchen gift"]
  },

  // ---------- Useful Gifts ----------
  {
    id: "p45", name: "Portable Phone Charger (10000mAh)", section: "gift", category: "useful-gifts",
    price: "$22.00",
    description: "A compact power bank that's genuinely useful for anyone, every day.",
    image: "images/products/p45.jpg", imageAlt: "Portable phone charger next to a smartphone",
    affiliateLink: "AFFILIATE_LINK_45", featured: false, latest: false,
    tags: ["power bank", "useful gift", "tech gift"]
  },
  {
    id: "p46", name: "Insulated Travel Tumbler", section: "gift", category: "useful-gifts",
    price: "$19.00",
    description: "Keeps drinks hot or cold for hours — a gift people will use constantly.",
    image: "images/products/p46.jpg", imageAlt: "Insulated travel tumbler on a table",
    affiliateLink: "AFFILIATE_LINK_46", featured: true, latest: false,
    tags: ["tumbler", "travel mug", "useful gift"]
  },
  {
    id: "p47", name: "Multi-Port Charging Station", section: "gift", category: "useful-gifts",
    price: "$26.50",
    description: "Charges several devices at once from a single, tidy station.",
    image: "images/products/p47.jpg", imageAlt: "Multi-port charging station with several devices",
    affiliateLink: "AFFILIATE_LINK_47", featured: false, latest: false,
    tags: ["charging station", "tech gift", "useful gift", "desk setup"]
  },
  {
    id: "p48", name: "Compact Travel Organizer Pouch Set", section: "gift", category: "useful-gifts",
    price: "$20.00",
    description: "A set of packing pouches that make travel (and everyday bags) more organized.",
    image: "images/products/p48.jpg", imageAlt: "Set of travel organizer pouches packed with items",
    affiliateLink: "AFFILIATE_LINK_48", featured: false, latest: false,
    tags: ["travel organizer", "packing cubes", "useful gift"]
  }
];

/* -----------------------------------------------------
   ARTICLES
   -----------------------------------------------------
   HOW TO ADD A NEW ARTICLE:
   1. Duplicate one of the article HTML files (e.g.
      article-cozy-bedroom-finds.html), rename it, and
      edit the title/text inside it.
   2. Add a matching entry below so it shows up on the
      homepage and the Ideas page.
   ----------------------------------------------------- */
const ARTICLES = [
  {
    id: "a01",
    title: "10 Cozy Bedroom Finds That Transform a Room",
    excerpt: "Small, affordable upgrades that make any bedroom feel warmer and more inviting.",
    image: "images/articles/cozy-bedroom-finds.jpg",
    imageAlt: "Cozy bedroom styled with warm lighting and soft textures",
    badge: "Room Finds",
    link: "article-cozy-bedroom-finds.html",
    productIds: ["p01","p02","p03","p04","p13","p14","p15","p16","p18","p22"]
  },
  {
    id: "a02",
    title: "Small Bedroom Ideas That Actually Work",
    excerpt: "Clever, space-saving finds for making a small bedroom feel calm instead of cramped.",
    image: "images/articles/small-bedroom-ideas.jpg",
    imageAlt: "Small, tidy bedroom with space-saving storage",
    badge: "Room Finds",
    link: "article-small-bedroom-ideas.html",
    productIds: ["p09","p10","p11","p12","p21","p22","p23","p24"]
  },
  {
    id: "a03",
    title: "10 Affordable Desk Setup Upgrades",
    excerpt: "Budget-friendly ways to make your workspace more organized and more enjoyable.",
    image: "images/articles/desk-setup-upgrades.jpg",
    imageAlt: "Organized desk setup with lamp and accessories",
    badge: "Room Finds",
    link: "article-desk-setup-upgrades.html",
    productIds: ["p05","p06","p07","p08","p13","p16","p20","p21","p23","p47"]
  },
  {
    id: "a04",
    title: "Gift Ideas for Someone Who Has Everything",
    excerpt: "Unique, thoughtful gift ideas for the person who insists they don't need anything.",
    image: "images/articles/gifts-someone-has-everything.jpg",
    imageAlt: "Collection of unique wrapped gifts",
    badge: "Gift Ideas",
    link: "article-gifts-someone-has-everything.html",
    productIds: ["p25","p32","p38","p41","p42","p43","p44","p48"]
  },
  {
    id: "a05",
    title: "Cute Gifts That Don't Feel Cheap",
    excerpt: "Adorable gift ideas that stay well under $25 without looking (or feeling) like it.",
    image: "images/articles/cute-gifts.jpg",
    imageAlt: "Small cute gifts wrapped and ready to give",
    badge: "Gift Ideas",
    link: "article-cute-gifts.html",
    productIds: ["p37","p38","p39","p40","p41","p42","p43","p44"]
  }
];
