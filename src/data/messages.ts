export type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  contentId?: string;
  messageType?: MessageType;
};

export type MessageType = 
  | "text"
  | "product-sunglasses"
  | "product-lipstick"
  | "product-budget-lipstick"
  | "podcast-rec"
  | "event-rec"
  | "style-rec";

export type Podcast = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;   
    link: string; 
    message: string; 
};

export type Recommendation = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    message: string;
}

export const podcasts: Podcast[] = [
    {
        id: 'podcast-001',
        title: 'Cool Shades: A History of Sunglasses, an interview with Vanessa Brown',
        description: 'Vanessa Brown joins us this week to discuss the ways in which sunglasses have been used in the construction of cool and celebrity glamour.',
        imageUrl: '/dressed.png',
        link: 'https://www.iheart.com/podcast/867-dressed-the-history-of-fas-29000690/episode/cool-shades-a-history-of-70350914/',
        message: `Interested in learning about the history of sunglasses? Check out the podcast below!`
    },
    {
        id: 'podcast-002',      
        title: `Why You're Addicted To Lip Balm With Lip Expert Sara Happ`,
        description: 'Do you ever think about your lip health? Do you have a lip care routine? Why are your lips dry even though you apply a lip balm every couple of hours? Wonder no more!',
        imageUrl: '/beauty_pod.png',
        link: 'https://www.iheart.com/podcast/239-that-beauty-podcast-65281198/episode/why-youre-addicted-to-lip-balm-198602970/',
        message: `Do you ever think about your lip health? Lip expert, Sara Happ, gives iHeart listeners a crash course on how to care for your kissers!`
    },
];        

export const recommendations: Recommendation[] = [
    {
        id: 'rec-001',
        title: 'Jess Hilarious also wears Detroit Sunglasses',
        description: 'As worn by Jess Hilarious',
        imageUrl: '/jess_hilarious.png',
        link: 'https://messyvisioneyewear.com/collections/best-seller/products/product_a614a2ca-3879-c1b8-44ed-b2c8c5d08d38',
        message: `One of iHeart’s favorite comedians is Jess Hilarious! Here she is wearing Messy Vision Eyeware.`
    },
    {
        id: 'rec-002',
        title: 'iHeart Upcoming events',
        description: 'Get 15% cashback on all tickets purchased on any capital one card.',
        imageUrl: '/iheart upcoming.webp',
        link: 'https://www.iheart.com/content/iheartradio-events/',
        message: `Looking for somewhere to wear your new lipstick? Check out iHeart Radio’s upcoming event list!`
    }
]; 