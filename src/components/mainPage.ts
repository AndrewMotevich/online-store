import { Controller } from './controller';
import { ICard, QueryParams } from './types';

class MainPage {
    data: ICard[];
    controller;
    testQueryParameters: QueryParams;

    constructor() {
        this.controller = new Controller();
        this.data = this.controller.getAllCards();
        this.testQueryParameters = {
            'price-range': [200, 1000],
            'stock-range': [],
            category: ['The International 2020', 'The International 2019'],
            type: [],
            hero: [],
            rarity: ['Mythical'],
            search: [],
        };
    }

    getCards() {
        return this.data;
    }

    filterTest(queryParameters: QueryParams | null = null, sort = null) {
        const set = new Set();
        const result: ICard[] = [];
        this.data.forEach((obj) => {
            if (
                obj.price >= this.testQueryParameters['price-range'][0] &&
                obj.price <= this.testQueryParameters['price-range'][1]
            ) {
                set.add(obj);
            }
        });
        for (const key of set) {
            const obj = key as ICard;
            result.push(obj);
        }
        console.log(result);
        return result;
    }
}

export default MainPage;
