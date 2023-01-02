interface ICard {
    id: number;
    itemName: string;
    category: string;
    type: string;
    hero: string;
    rarity: string;
    description: string;
    price: number;
    stock: number;
    img1: string;
    img2: string;
    videoLink: string;
}

class MainPage {
    data;
    constructor(data: ICard[]) {
        this.data = data;
    }

    getCards() {
        return this.data;
    }

    filterTest() {
        this.data = this.data.filter((x) => x.rarity === 'Legendary');
    }
}

export default MainPage;