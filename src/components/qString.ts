import { QueryParams } from "./types";

class QString {
    result: QueryParams;
    isQuery;
    constructor() {
        this.result = {
            "price-range": [],
            category: [],
            type: [],
            hero: [],
            rarity: [],
            "stock-range": [],
            search: [],
        };
        this.isQuery = false;
    }
    getQueryString() {
        const qStr = `${window.location}`.split('?')[1];
        const data = qStr.split('&');

        data.forEach((item) => {
            const [key, value] = item.split('=');
            if (key === "price-range") {
                this.result['price-range'] = value.split('%2C+').map((x) => +x);
            } else if (key === 'stock-range') {
                this.result['stock-range'] = value.split('%2C+').map((x) => +x);
            } else {
                this.result[key as keyof QueryParams] = value.split('%2C+');
            }
            console.log(key, value);
        });
        return this.result;
    }

    setQueryParams(key: string, value: string) {
        this.isQuery = true;
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has(key)) {
            value = `${searchParams.get(key)}, ${value}`;
        }
        searchParams.set(key, value);
        const newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
        history.pushState(null, '', newRelativePathQuery);
    }

    resetQuery() {
        this.result = {
            "price-range": [],
            category: [],
            type: [],
            hero: [],
            rarity: [],
            "stock-range": [],
            search: [],
        };
        history.pushState(null, '', window.location.pathname);
        this.isQuery = false;
    }
}

export {QString};