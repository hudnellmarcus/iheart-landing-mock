export type Podcast = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;   
    link: string; 
};

export type Recommendation = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export const podcasts: Podcast[] = [
    {
        id: 'podcast-001',
        title: 'Cool Shades: A History of Sunglasses, an interview with Vanessa Brown',
        description: 'Vanessa Brown joins us this week to discuss the ways in which sunglasses have been used in the construction of cool and celebrity glamour.',
        imageUrl: '/dressed.png',
        link: ''
    },
    {
        id: 'podcast-002',      
        title: `Why You're Addicted To Lip Balm With Lip Expert Sara Happ`,
        description: 'Do you ever think about your lip health? Do you have a lip care routine? Why are your lips dry even though you apply a lip balm every couple of hours? Wonder no more!',
        imageUrl: '/beauty_pod.png',
        link: ''
    },
];        

export const recommendations: Recommendation[] = [
    {
        id: 'rec-001',
        title: 'Jess Hilarious also wears Detroit Sunglasses',
        description: 'As worn by Jess Hilarious',
        imageUrl: '/jess_hilarious.png',
        link: ''
    },
    {
        id: 'rec-002',
        title: 'Jingle Ball 2025 Tickets',
        description: 'Get 15% cashback on all tickets purchased on any capital one card',
        imageUrl: '/jingle_ball.png',
        link: ''
    }
]; 