import goods from '../assets/goods.json';
import { ICard } from './types';

class Controller {
    cards: ICard[];
    constructor() {
        this.cards = [];
    }
    getAllCards(): ICard[] {
        this.cards = goods;
        return this.cards;
    }
    getCardById(id: number): ICard | object {
        const result = {};
        goods.map((element) => {
            if (element.id === id) {
                Object.assign(result, element);
            }
        });
        return result;
    }
    getCardByItemName(name: string):ICard|object  {
        const result = {};
        goods.map((element) => {
            if (element['item-name'] === name) {
                Object.assign(result, element);
            }
        });
        return result;
    }
    getCardsByCategory(category: string):ICard[] {
        const result: ICard[] = [];
        goods.map((element) => {
            if (element['category'] === category) {
                result.push(element);
            }
        });
        return result;
    }
    getCardsByType(type: string):ICard[] {
        const result: ICard[] = [];
        goods.map((element) => {
            if (element['type'] === type) {
                result.push(element);
            }
        });
        return result;
    }
    getCardsByRarity(rarity: string):ICard[] {
        const result: ICard[] = [];
        goods.map((element) => {
            if (element['rarity'] === rarity) {
                result.push(element);
            }
        });
        return result;
    }
}

export { Controller };
