export type Product = {
    id: string;
    name: string;
    category: 'sunglasses' | 'lipstick';
    imageUrl: string;
    price: number;
    cashbackPercent: number;        
    featured?: boolean;
    pricePoint?: 'premium' | 'budget' | 'medium';
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
    },
    {
    id: 'lip-002',
    name: 'Silky Satin Lipstick',
    category: 'lipstick',
    imageUrl: '/silky_satin.png',
    price: 100,
    cashbackPercent: 10,
    pricePoint: 'premium',
  },
  {
    id: 'lip-003',
    name: 'Velvet Matte Lipstick',
    category: 'lipstick',
    imageUrl: '/velvet_matte.png',
    price: 100,
    cashbackPercent: 10,
    pricePoint: 'premium',
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
  },
  {
    id: 'lip-005',
    name: 'Audacious Lipstick',
    category: 'lipstick',
    imageUrl: '/audacious.png',
    price: 23.80,
    cashbackPercent: 4,
    pricePoint: 'budget',
  },
  {
    id: 'lip-006',
    name: 'Retro Matte Lipstick',
    category: 'lipstick',
    imageUrl: '/retro_matte.png',
    price: 16.10,
    cashbackPercent: 3,
    pricePoint: 'budget',
  },
];

