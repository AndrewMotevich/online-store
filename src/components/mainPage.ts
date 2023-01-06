import { Controller } from './controller';
import { ICard, QueryParams } from './types';

import { QString } from './qString';

class MainPage {
    data: ICard[];
    controller;
    testQueryParameters: QueryParams;
    qString: QString;

    constructor() {
        this.controller = new Controller();
        this.data = this.controller.getAllCards();
        this.qString = new QString();
        this.testQueryParameters = this.qString.hasQuery() ? this.qString.getQueryObject() : this.qString.result;
    }

    getCards() {
        return this.data;
    }

    filterTest() {
        if (!this.qString.hasQuery()) {
            return this.data;
        }

        const queryParameters = this.testQueryParameters;
        const allCards = this.data;
        const set = new Set();
        const result:ICard[] = [];

        function priceFilter(){
            set.clear();
            if (queryParameters['price-range'].length === 0) {
                allCards.forEach((obj)=>set.add(obj));
                return 0;
            }
            const max = queryParameters['price-range'][1];
            const min = queryParameters['price-range'][0];
            allCards.forEach((obj) => {
                if (
                    obj.price >= min &&
                    obj.price <= max
                ) {
                    set.add(obj);
                }
            });
            return 1;
        }
        function stockFilter(){
            if (queryParameters['stock-range'].length === 0) return 0;
            const tempSet = new Set();
            const max = queryParameters['stock-range'][1];
            const min = queryParameters['stock-range'][0];
            allCards.forEach((obj) => {
                if (
                    obj.stock >= min &&
                    obj.stock <= max
                ) {
                    tempSet.add(obj);
                }
            });
            set.clear();
            tempSet.forEach(element=>set.add(element));
            return 1;
        }
        function typeFilter(){
            const tempSet = new Set();
            const filterArray: Array<string> = queryParameters.type;
            if (filterArray.length === 0) return 0;
            set.forEach((element) => {
                const elem = element as ICard;
                for (const key in filterArray){
                    if (elem.type === filterArray[key]) {
                        tempSet.add(elem);
                    }
                }
            });
            set.clear();
            tempSet.forEach(element=>set.add(element));
            return 1;
        }
        function categoryFilter(){
            const tempSet = new Set();
            const filterArray: Array<string> = queryParameters.category;
            if (filterArray.length === 0) return 0;
            set.forEach((element) => {
                const elem = element as ICard;
                for (const key in filterArray){
                    if (elem.category === filterArray[key].replace(/-/g, ' ')) {
                        tempSet.add(elem);
                    }
                }
            });
            set.clear();
            tempSet.forEach(element=>set.add(element));
            return 1;
        }
        function rarityFilter(){
            const tempSet = new Set();
            const filterArray: Array<string> = queryParameters.rarity;
            if (filterArray.length === 0) return 0;
            set.forEach((element) => {
                const elem = element as ICard;
                for (const key in filterArray){
                    if (elem.rarity === filterArray[key]) {
                        tempSet.add(elem);
                    }
                }
            });
            set.clear();
            tempSet.forEach(element=>set.add(element));
            return 1;
        }
        function includeSearchParameter(){
            const tempSet = new Set();
            const searchParametr = queryParameters.search[0];
            if (queryParameters.search.length === 0) return 0;
            set.forEach((element) => {
                const elem = element as ICard;
                const elemValues = Object.values(elem);
                elemValues.forEach((value) => {
                    if (value === searchParametr.replace(/\+/g, ' ')){
                        tempSet.add(elem);
                    }
                });
            });
            set.clear();
            tempSet.forEach(element=>set.add(element));
            return 1;
        }
        function pushSetToResult(){
            result.length = 0;
            for (const key of set) {
                const obj = key as ICard;
                result.push(obj);
            }
            return 1;
        }
        function sortCards(){
            if (queryParameters.sort.length === 0) return 0;
            else if (queryParameters.sort[0] === "descendingPrice"){
                result.sort((a, b)=> b.price - a.price);
                return 1;
            }
            else if (queryParameters.sort[0] === "ascendingPrice") {
                result.sort((a, b)=> a.price - b.price);
            }
            else if (queryParameters.sort[0] === "descendingStock"){
                result.sort((a, b)=> b.stock - a.stock);
                return 1;
            }
            else if (queryParameters.sort[0] === "ascendingStock") {
                result.sort((a, b)=> a.stock - b.stock);
            }
        }
        priceFilter();stockFilter();typeFilter();categoryFilter();rarityFilter();includeSearchParameter();pushSetToResult();sortCards();
        return result;
    }
}

export default MainPage;
