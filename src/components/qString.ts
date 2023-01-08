import { QueryParams} from './types';

class QString {
    result: QueryParams;
    constructor() {
        this.result = {
            'price-range': [],
            category: [],
            type: [],
            hero: [],
            rarity: [],
            'stock-range': [],
            search: [],
            sort: [],
            limit: [],
            currentPage: [],
        };
    }

    getQueryObject() {
        const qStr = `${window.location}`.split('?')[1];
        const data = qStr.split('&');

        data.forEach((item) => {
            const [key, value] = item.split('=');
            if (key === 'price-range') {
                this.result['price-range'] = value.split('%2C+').map((x) => +x);
            } else if (key === 'stock-range') {
                this.result['stock-range'] = value.split('%2C+').map((x) => +x);
            } else {
                this.result[key as keyof QueryParams] = value.split('%2C+');
            }
        });
        return this.result;
    }

    getQueryString() {
        const qStr = `${window.location}`.split('?')[1];
        return qStr ? `?${qStr}` : '';
    }

    setQueryParams(key: string, value: string) {
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has(key)) {
            value = `${searchParams.get(key)}, ${value}`;
        }
        searchParams.set(key, value);
        const newRelativePathQuery = `${window.location.pathname}?${searchParams}`;
        history.pushState(null, '', newRelativePathQuery);

        localStorage.setItem('lastPath', `${localStorage.getItem('lastURLStart') || 'home'}${window.location.search}`);
    }

    delQueryParams(key: string, value: string) {
        const searchParams = new URLSearchParams(window.location.search);
        const queryValues = Array.from(searchParams.entries())
            .filter((arr) => arr[0] === key)[0]
            .slice(1)[0]
            .split(', ');

        if (queryValues.length === 1) {
            searchParams.delete(key);
            history.pushState(null, '', `${window.location.pathname}?${searchParams.toString()}`);
            localStorage.setItem('lastPath', `${localStorage.getItem('lastURLStart') || 'home'}${window.location.search}`);
            return;
        }

        const newParams = queryValues.filter((val) => val !== value).join(', ');
        searchParams.set(key, newParams);
        const newRelativePathQuery = `${window.location.pathname}?${searchParams}`;
        history.pushState(null, '', newRelativePathQuery);
        localStorage.setItem('lastPath', `${localStorage.getItem('lastURLStart') || 'home'}${window.location.search}`);
    }

    delQueryKey(key: string) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.delete(key);
        history.pushState(null, '', `${window.location.pathname}?${searchParams.toString()}`);
        localStorage.setItem('lastPath', `${localStorage.getItem('lastURLStart') || 'home'}${window.location.search}`);
    }

    resetQueryString() {
        history.pushState(null, '', window.location.pathname);
    }

    resetQuery() {
        this.result = {
            'price-range': [],
            category: [],
            type: [],
            hero: [],
            rarity: [],
            'stock-range': [],
            search: [],
            sort: [],
            currentPage: [],
            limit: []
        };
        history.pushState(null, '', window.location.pathname);
        localStorage.setItem('lastPath', `${localStorage.getItem('lastURLStart') || 'home'}${window.location.search}`);
    }

    hasQuery() {
        return !!`${window.location}`.split('?')[1];
    }
}

export { QString };
