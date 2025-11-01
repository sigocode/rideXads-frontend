const products = [
  // Flipkart Products
  {
    id: 'f1',
    platform: 'flipkart',
    title: 'Wireless Earbuds Pro',
    desc: 'Compact true wireless earbuds with active noise cancellation.',
    price: 2499,
    commission: '8%',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155220f9d8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    affiliateUrl: 'https://www.flipkart.com/search?q=earbuds&affid=YOUR_AFFILIATE_ID'
  },
  {
    id: 'f2',
    platform: 'flipkart',
    title: 'Smartwatch GX',
    desc: 'Fitness tracking, sleep monitor and 7-day battery life.',
    price: 5999,
    commission: '7%',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    affiliateUrl: 'https://www.flipkart.com/search?q=smartwatch&affid=YOUR_AFFILIATE_ID'
  },
  // Amazon Products
  {
    id: 'a1',
    platform: 'amazon',
    title: 'Premium Coffee Maker',
    desc: 'Programmable coffee maker with built-in grinder and thermal carafe.',
    price: 12999,
    commission: '4%',
    category: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    affiliateUrl: 'https://www.amazon.in/dp/EXAMPLE1?tag=YOUR_ASSOCIATE_ID'
  },
  {
    id: 'a2',
    platform: 'amazon',
    title: 'Gaming Laptop Pro',
    desc: 'High-performance gaming laptop with RTX graphics and 165Hz display.',
    price: 89999,
    commission: '5%',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    affiliateUrl: 'https://www.amazon.in/dp/EXAMPLE2?tag=YOUR_ASSOCIATE_ID'
  }
  ,
  // eBay sample
  {
    id: 'e1',
    platform: 'ebay',
    title: 'Vintage Camera Lens',
    desc: 'High-quality vintage lens for collectors and photographers.',
    price: 7499,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1519183071298-a2962be54a78?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    affiliateUrl: 'https://www.ebay.com/sch/i.html?_nkw=vintage+lens&affid=YOUR_EBAY_AFFILIATE'
  },
  // Zepto sample (quick grocery-like)
  {
    id: 'z1',
    platform: 'zepto',
    title: 'Organic Almonds 1kg',
    desc: 'Premium organic almonds, fresh packed for quick delivery.',
    price: 899,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    affiliateUrl: 'https://www.zepto.com/product/organic-almonds?aff=YOUR_AFFILIATE'
  },
  // Blinkit sample
  {
    id: 'b1',
    platform: 'blinkit',
    title: 'Fresh Milk 1L',
    desc: 'Farm-fresh milk delivered within minutes.',
    price: 59,
    category: 'Grocery',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    affiliateUrl: 'https://www.blinkit.com/product/fresh-milk-1l?aff=YOUR_AFFILIATE'
  },
  // More platform: Myntra sample
  {
    id: 'm1',
    platform: 'myntra',
    title: 'Classic Leather Jacket',
    desc: 'Premium leather jacket with modern fit.',
    price: 11999,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1520975919222-4a5d4d9b9b2a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    affiliateUrl: 'https://www.myntra.com/product/leather-jacket?aff=YOUR_AFFILIATE'
  },
  // Grocery quick pick example for local apps
  {
    id: 'g1',
    platform: 'local',
    title: 'Handmade Soap Pack',
    desc: 'Natural handmade soaps with essential oils.',
    price: 299,
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',
    affiliateUrl: 'https://your-affiliate.example/product/handmade-soap'
  }
]

// Website Building Service Packages
export const services = [
  {
    id: 's1',
    title: 'Basic E-commerce Setup',
    price: 29999,
    features: [
      'Custom WordPress/WooCommerce setup',
      'Mobile responsive design',
      'Payment gateway integration',
      'Basic SEO setup',
      '5 product pages',
      '3 months support'
    ]
  },
  {
    id: 's2',
    title: 'Advanced Business Suite',
    price: 79999,
    features: [
      'Custom React/Next.js development',
      'Advanced e-commerce features',
      'Admin dashboard',
      'Analytics integration',
      'Premium hosting setup',
      'Social media integration',
      '6 months support'
    ]
  },
  {
    id: 's3',
    title: 'Enterprise Solution',
    price: 199999,
    features: [
      'Full-stack custom development',
      'Advanced security features',
      'Custom API development',
      'Multiple payment gateways',
      'Advanced analytics dashboard',
      'Inventory management system',
      '12 months support'
    ]
  }
]

export default products