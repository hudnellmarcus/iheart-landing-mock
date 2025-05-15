export type Product = {
    id: string;
    name: string;
    category: 'sunglasses' | 'lipstick';
    imageUrl: string;
    price: number;
    cashbackPercent: number;        
    featured?: boolean;
    pricePoint?: 'premium' | 'budget' | 'medium';
    productUrl?: string;
};

export const sunglasses: Product[] = [
    {
        id: 'sg-001',
        name: 'Ray-Ban AI Sunglasses',
        category: 'sunglasses',
        imageUrl: '/RayBan_AI.png',
        price: 299,
        cashbackPercent: 5,
        featured: false,
        pricePoint: 'premium',
        productUrl: "https://www.macys.com/shop/product/ray-ban-meta-wayfarer-unisex-ai-sunglasses-rw4006?ID=17174809&pla_country=US&CAGPSPN=pla&utm_adgroup_id=172766836533&utm_creative_id=727318283646&utm_product_id=8056597988377USA&m_sc=sem&m_sb=Google&m_tp=PLA&m_ac=MMN_Macys_Symbiosys&m_ag=172766836533&m_cn=22071235575&sym_campaign_id=22071235575&sym_adset_id=172766836533&sym_ad_id=727318283646&sym_source=google&sym_medium=pla&gad_campaignid=22071235575"
    },
    {
        id: 'sg-002',
        name: 'Detroit',
        category: 'sunglasses',
        imageUrl: '/Detroit.png',
        price: 35.99,
        cashbackPercent: 0,
        featured: false,
        pricePoint: 'budget',
        productUrl: "https://messyvisioneyewear.com/collections/best-seller/products/product_a614a2ca-3879-c1b8-44ed-b2c8c5d08d38"
    },
    {
        id: 'sg-003',
        name: 'Beale',
        category: 'sunglasses',
        imageUrl: '/Beale.png',
        price: 95,
        cashbackPercent: 5,
        featured: false,
        pricePoint: 'medium',
        productUrl: "https://www.warbyparker.com/sunglasses/beale/striped-grotto?w=wide"
    },
]; 

export const premiumLipsticks: Product[] = [
    {
        id: 'lp-001',
        name: 'The Precious Lipstick',
        category: 'lipstick',
        imageUrl: '/the_precious.png',
        price: 110,
        cashbackPercent: 10,
        featured: false,
        pricePoint: 'premium',
        productUrl: 'https://www.neimanmarcus.com/p/cle-de-peau-beaute-the-precious-lipstick-prod268840023?childItemId=NMC641E_9Z&msid=4728652&navpath=cat000000_cat000285_cat10420742_cat10470734&page=0&position=0'

    },
    {
    id: 'lip-002',
    name: 'Silky Satin Lipstick',
    category: 'lipstick',
    imageUrl: '/silky_satin.png',
    price: 100,
    cashbackPercent: 10,
    pricePoint: 'premium',
    productUrl: 'https://www.neimanmarcus.com/p/christian-louboutin-rouge-louboutin-silky-satin-lipstick-prod260920680?childItemId=NMC5XC0_24&msid=4543787&navpath=cat000000_cat000285_cat10420742_cat10470734&page=0&position=2'

  },
  {
    id: 'lip-003',
    name: 'Velvet Matte Lipstick',
    category: 'lipstick',
    imageUrl: '/velvet_matte.png',
    price: 100,
    cashbackPercent: 10,
    pricePoint: 'premium',
    productUrl: 'https://www.neimanmarcus.com/p/christian-louboutin-rouge-louboutin-velvet-matte-lipstick-prod260920786?childItemId=NMC5XBZ_60&msid=4543786&navpath=cat000000_cat000285_cat10420742_cat10470734&page=0&position=3'
  },
];

export const budgetLipsticks: Product[] = [
  {
    id: 'lip-004',
    name: 'Mineral Creme Lipstick',
    category: 'lipstick',
    imageUrl: '/mineral_creme.png',
    price: 22,
    cashbackPercent: 10,
    pricePoint: 'budget',
    productUrl: 'https://www.neimanmarcus.com/p/youngblood-mineral-cosmetics-mineral-creme-lipstick-prod256770294?childItemId=NMC5TZQ_%246&msid=4445146&navpath=cat000000_cat000285_cat10420742_cat10470734&page=0&position=4'
  },
  {
    id: 'lip-005',
    name: 'Audacious Lipstick',
    category: 'lipstick',
    imageUrl: '/audacious.png',
    price: 23.80,
    cashbackPercent: 4,
    pricePoint: 'budget',
    productUrl: 'https://www.narscosmetics.com/USA/rita-audacious-lipstick/0607845094722.html?gad_source=1&gad_campaignid=19671794632&gbraid=0AAAAADolTK6pBJj_v6Ta4M3Zhw2bMsf40&gclid=CjwKCAjwiezABhBZEiwAEbTPGF2zlHih25NLNJnNsFOodHTdUoHg5mHSQzxM5ZRCnX0LYV7xPwc4ARoCXFEQAvD_BwE&gclsrc=aw.ds'
  },
  {
    id: 'lip-006',
    name: 'Retro Matte Lipstick',
    category: 'lipstick',
    imageUrl: '/retro_matte.png',
    price: 16.10,
    cashbackPercent: 3,
    pricePoint: 'budget',
    productUrl: 'https://www.maccosmetics.com/product/13854/52593/products/makeup/lips/lipstick/retro-matte-lipstick?shade=Ruby_Woo&gad_source=1&gad_campaignid=20327587436&gbraid=0AAAAADSEZ0JSNQzLdV8lMBVUpUnSIOvFa&gclid=CjwKCAjwiezABhBZEiwAEbTPGADXrfU9kEzp1fgF3C0aaTFlxU4KhfbWLW4DLMFxII45W0MDhBfWZxoCYuQQAvD_BwE&gclsrc=aw.ds'
  },
];

