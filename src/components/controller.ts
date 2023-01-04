/*//Test controller
    import { Controller } from "./components/controller";
    const controller = new Controller();
    //get all cards
    const cards = controller.getAllCards();
    console.log(cards);
    //get card by Id
    const cardId = controller.getCardById(3);
    console.log("Card with ID 3:\n",cardId);
    //get card by name
    const cardName = controller.getCardByItemName("Fate Meridian");
    console.log("Card with item name -Fate Meridian-:\n",cardName);
    //get cards by category
    const cardsCategoryInternational2020 = controller.getCardsByCategory("The International 2020");
    console.log("Cards from category -International 2020-:\n",cardsCategoryInternational2020);
    //get cards by type
    const cardsTypeItem = controller.getCardsByType("item");
    console.log("Cards with type Item:\n",cardsTypeItem);
    //get cards by rarity
    const cardsRarityMythical = controller.getCardsByRarity("Mythical");
    console.log("Cards with rarity Mythical:\n",cardsRarityMythical);
*/
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
