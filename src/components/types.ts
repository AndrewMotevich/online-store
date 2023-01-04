type ICard = {
    id: number;
    'item-name': string;
    category: string;
    type: string;
    hero: string;
    rarity: string;
    description: string;
    price: number;
    stock: number;
    'hero-icon': string;
    img1: string;
    img2: string;
    'video-link': string;
};
type QueryParams = {
    "price-range": Array<number>;
    "stock-range": Array<number>;
    sort: Array<string>;
    category: Array<string>;
    type: Array<string>;
    hero: Array<string>;
    rarity: Array<string>;
    search: Array<string>;
};
export { ICard, QueryParams };
