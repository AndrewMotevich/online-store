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
    "price-range": Array<number> | Array<string>;
    "stock-range": Array<number> | Array<string>;
    sort: Array<string> | Array<string>;
    category: Array<string> | Array<string>;
    type: Array<string> | Array<string>;
    hero: Array<string> | Array<string>;
    rarity: Array<string> | Array<string>;
    search: Array<string> | Array<string>;
    currentPage: Array<string>;
    limit: Array<string>;
};
type basketItem = {
    order: number;
    id: number;
    itemQnt: number;
}
export { ICard, QueryParams, basketItem};
