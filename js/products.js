// Curated catalog of high-margin dropshipping products.
// margin is derived at render time from cost + price.

const PRODUCTS = [
  {
    id: "galaxy-projector",
    name: "Galaxy Star Projector",
    category: "Home & Gadgets",
    cost: 8.00,
    price: 34.99,
    rating: 4.7,
    reviews: 2140,
    badge: "Trending",
    blurb: "Bluetooth nebula projector with 360° rotation — a viral bedroom upgrade.",
    seed: "galaxy-projector"
  },
  {
    id: "neck-fan",
    name: "Bladeless Portable Neck Fan",
    category: "Home & Gadgets",
    cost: 6.00,
    price: 24.99,
    rating: 4.5,
    reviews: 1876,
    badge: "Best Seller",
    blurb: "Hands-free cooling for commuters, gym-goers, and summer festivals.",
    seed: "neck-fan"
  },
  {
    id: "posture-corrector",
    name: "Adjustable Posture Corrector",
    category: "Health & Wellness",
    cost: 4.00,
    price: 19.99,
    rating: 4.4,
    reviews: 3320,
    badge: null,
    blurb: "Lightweight back brace for remote workers stuck at a desk all day.",
    seed: "posture-corrector"
  },
  {
    id: "pet-hair-roller",
    name: "Reusable Pet Hair Remover Roller",
    category: "Pet",
    cost: 3.00,
    price: 16.99,
    rating: 4.6,
    reviews: 5410,
    badge: "Best Seller",
    blurb: "Self-cleaning lint roller built for pet owners — near-pure margin.",
    seed: "pet-hair-roller"
  },
  {
    id: "car-mount-charger",
    name: "Wireless Car Charger Mount",
    category: "Auto & Tech",
    cost: 7.00,
    price: 29.99,
    rating: 4.5,
    reviews: 2987,
    badge: null,
    blurb: "Auto-clamping 15W wireless charging mount for the dashboard or vent.",
    seed: "car-mount-charger"
  },
  {
    id: "led-makeup-mirror",
    name: "LED Halo Makeup Mirror",
    category: "Beauty",
    cost: 9.00,
    price: 39.99,
    rating: 4.8,
    reviews: 1654,
    badge: "Trending",
    blurb: "Ring-light mirror with 3 tone settings — a beauty-influencer favorite.",
    seed: "led-makeup-mirror"
  },
  {
    id: "resistance-bands",
    name: "5-Piece Resistance Bands Set",
    category: "Fitness",
    cost: 5.00,
    price: 22.99,
    rating: 4.6,
    reviews: 4120,
    badge: null,
    blurb: "Home-gym staple with evergreen demand and tiny shipping cost.",
    seed: "resistance-bands"
  },
  {
    id: "acupressure-mat",
    name: "Acupressure Mat & Pillow Set",
    category: "Health & Wellness",
    cost: 10.00,
    price: 44.99,
    rating: 4.7,
    reviews: 1290,
    badge: null,
    blurb: "Foam mat for back pain relief — high perceived value, low cost.",
    seed: "acupressure-mat"
  },
  {
    id: "smart-water-bottle",
    name: "Smart LED Reminder Water Bottle",
    category: "Health & Wellness",
    cost: 6.00,
    price: 27.99,
    rating: 4.4,
    reviews: 987,
    badge: "New",
    blurb: "Glows to remind you to hit your hydration goal every hour.",
    seed: "smart-water-bottle"
  },
  {
    id: "kitchen-gadget-set",
    name: "Silicone Kitchen Gadget Set",
    category: "Home & Gadgets",
    cost: 4.00,
    price: 18.99,
    rating: 4.5,
    reviews: 2765,
    badge: null,
    blurb: "12-piece heat-resistant utensil bundle — sells itself in a bundle.",
    seed: "kitchen-gadget-set"
  },
  {
    id: "portable-blender",
    name: "USB Portable Blender Bottle",
    category: "Home & Gadgets",
    cost: 8.00,
    price: 32.99,
    rating: 4.3,
    reviews: 1543,
    badge: null,
    blurb: "Rechargeable personal blender for smoothies on the go.",
    seed: "portable-blender"
  },
  {
    id: "led-strip-lights",
    name: "App-Controlled LED Strip Lights",
    category: "Home & Gadgets",
    cost: 7.00,
    price: 29.99,
    rating: 4.6,
    reviews: 6210,
    badge: "Best Seller",
    blurb: "16M-color RGB strip with music sync — a top evergreen gadget.",
    seed: "led-strip-lights"
  },
  {
    id: "wireless-phone-stand",
    name: "Foldable Wireless Charging Stand",
    category: "Auto & Tech",
    cost: 9.00,
    price: 36.99,
    rating: 4.5,
    reviews: 1104,
    badge: null,
    blurb: "3-in-1 fast charger for phone, watch, and earbuds on a desk.",
    seed: "wireless-phone-stand"
  },
  {
    id: "anti-snore-device",
    name: "Anti-Snore Nasal Device",
    category: "Health & Wellness",
    cost: 2.00,
    price: 14.99,
    rating: 4.2,
    reviews: 872,
    badge: null,
    blurb: "Tiny cost, huge margin — a classic problem-solution impulse buy.",
    seed: "anti-snore-device"
  },
  {
    id: "magnetic-eyelashes",
    name: "Magnetic Eyelashes Kit",
    category: "Beauty",
    cost: 5.00,
    price: 21.99,
    rating: 4.6,
    reviews: 3987,
    badge: "Trending",
    blurb: "No-glue lash kit with applicator — huge social-video pull.",
    seed: "magnetic-eyelashes"
  },
  {
    id: "compression-socks",
    name: "Compression Socks (3-Pack)",
    category: "Fitness",
    cost: 6.00,
    price: 24.99,
    rating: 4.5,
    reviews: 2233,
    badge: null,
    blurb: "Athletic recovery socks — repeat-purchase potential included.",
    seed: "compression-socks"
  },
  {
    id: "dog-calming-bed",
    name: "Dog Anxiety Calming Bed",
    category: "Pet",
    cost: 15.00,
    price: 54.99,
    rating: 4.8,
    reviews: 1765,
    badge: "Best Seller",
    blurb: "Donut-shaped faux-fur bed that pet owners happily pay a premium for.",
    seed: "dog-calming-bed"
  },
  {
    id: "massage-gun",
    name: "Mini Handheld Massage Gun",
    category: "Fitness",
    cost: 18.00,
    price: 69.99,
    rating: 4.7,
    reviews: 1432,
    badge: "Trending",
    blurb: "Percussion therapy device — premium price point, premium feel.",
    seed: "massage-gun"
  }
];

function margin(p) {
  return ((p.price - p.cost) / p.price) * 100;
}

function profit(p) {
  return p.price - p.cost;
}
