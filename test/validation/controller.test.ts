import { Controller } from '../../src/components/controller';
import goods from '../../src/assets/goods.json';
import { ICard } from '../../src/components/types';

const controller = new Controller();

describe('Check controller output methods:', () => {
    test('get all cards method', () => {
        expect(controller.getAllCards().length).toBe(goods.length);
        expect(JSON.stringify(controller.getAllCards())).toBe(JSON.stringify(goods));
        expect(controller.getAllCards()[0]['item-name']).toBe(goods[0]['item-name']);
    });
    test('get card by Id method', () => {
        expect((controller.getCardById(2) as ICard).id).toBe(2);
        expect((controller.getCardById(4) as ICard).id).toBe(4);
        expect((controller.getCardById(10) as ICard).id).toBe(10);
        expect((controller.getCardById(15) as ICard).id).toBe(15);
        expect((controller.getCardById(1) as ICard).id).toBe(1);
    });
    test('get card by name method', () => {
        expect((controller.getCardByItemName('Fate Meridian') as ICard)['item-name']).toBe('Fate Meridian');
        expect((controller.getCardByItemName('Dark Behemoth') as ICard)['item-name']).toBe('Dark Behemoth');
        expect((controller.getCardByItemName('Fowl Omen') as ICard)['item-name']).toBe('Fowl Omen');
    });
    test('get cards by category', () => {
        expect((controller.getCardsByCategory('The International 2017') as ICard[]).length).toBe(2);
        expect((controller.getCardsByCategory('The International 2018') as ICard[]).length).toBe(2);
        expect((controller.getCardsByCategory('The International 2019') as ICard[]).length).toBe(4);
        expect((controller.getCardsByCategory('The International 2020') as ICard[]).length).toBe(2);
        expect((controller.getCardsByCategory('The International 2021') as ICard[]).length).toBe(0);
        expect((controller.getCardsByCategory('The International 2022') as ICard[]).length).toBe(5);
    });
    test('get cards by type', () => {
        expect((controller.getCardsByType('item') as ICard[]).length).toBe(5);
        expect((controller.getCardsByType('bundle') as ICard[]).length).toBe(16);
    });
    test('get cards by rarity', () => {
        expect((controller.getCardsByRarity('Common') as ICard[]).length).toBe(1);
        expect((controller.getCardsByRarity('Uncommon') as ICard[]).length).toBe(1);
        expect((controller.getCardsByRarity('Mythical') as ICard[]).length).toBe(13);
        expect((controller.getCardsByRarity('Rare') as ICard[]).length).toBe(1);
        expect((controller.getCardsByRarity('Immortal') as ICard[]).length).toBe(2);
        expect((controller.getCardsByRarity('Legendary') as ICard[]).length).toBe(1);
        expect((controller.getCardsByRarity('Arcana') as ICard[]).length).toBe(2);
    });
});
