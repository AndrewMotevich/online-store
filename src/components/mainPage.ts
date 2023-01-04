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
            'price-range': [],
            'stock-range': [],
            sort: [],
            category: [],
            type: [],
            hero: [],
            rarity: [],
            search: [],
        };
    }

    getCards() {
        return this.data;
    }

    filterTest() {
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
                    if (value === searchParametr){
                        tempSet.add(elem);
                    }
                });
            });
            // console.log(tempSet);
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
            else if (queryParameters.sort[0] === "ascending"){
                result.sort((a,b)=>{
                    if (a.price < b.price) {
                        return -1;
                      }
                      if (a.price > b.price) {
                        return 1;
                      }
                      return 0;
                });
                return 1;
            }
            else if (queryParameters.sort[0] === "descending") {
                result.sort((a,b)=>{
                    if (a.price > b.price) {
                        return -1;
                      }
                      if (a.price < b.price) {
                        return 1;
                      }
                      return 0;
                });
            }
        }
        priceFilter();stockFilter();typeFilter();rarityFilter();includeSearchParameter();pushSetToResult();sortCards();
        // console.log(priceFilter(),stockFilter(),typeFilter(),rarityFilter(),includeSearchParameter(),pushSetToResult(),sortCards(),);
        // console.log(result);
        return result;
    }
}

export default MainPage;
