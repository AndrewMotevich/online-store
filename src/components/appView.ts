import MainPage from "./mainPage";

const testBD = [
    {
      "id": 1,
      "itemName": "Dark Behemoth",
      "category": "The International 2022",
      "type": "bundle",
      "hero": "Primal Beast",
      "rarity": "Mythical",
      "description": "Содержит загрузочный экран и все предметы из набора Dark Behemoth для Primal Beast.",
      "price": 1299,
      "stock": 10,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2022/11/625.png",
      "img2": "",
      "videoLink": "https://collectorsshop.ru/img/catalog/items/video/2022/11/625mp4"
    },
    {
      "id": 2,
      "itemName": "Spoils of the Shadowveil",
      "category": "The International 2022",
      "type": "bundle",
      "hero": "Spectre",
      "rarity": "Mythical",
      "description": "Содержит все предметы из набора Spoils of the Shadowveil для Spectre.",
      "price": 6999,
      "stock": 5,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2022/11/635.png",
      "img2": "",
      "videoLink": "https://collectorsshop.ru/img/catalog/items/video/2022/11/635mp4"
    },
    {
      "id": 3,
      "itemName": "Blue Horizons",
      "category": "The International 2022",
      "type": "bundle",
      "hero": "Marci",
      "rarity": "Mythical",
      "description": "Содержит загрузочный экран и все предметы из набора Blue Horizons для Marci.",
      "price": 999,
      "stock": 10,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2022/11/627.png",
      "img2": "",
      "videoLink": "https://collectorsshop.ru/img/catalog/items/video/2022/11/627mp4"
    },
    {
      "id": 4,
      "itemName": "Crown of Calaphas",
      "category": "The International 2020",
      "type": "bundle",
      "hero": "Shadow Demon",
      "rarity": "Mythical",
      "description": "Содержит все предметы из набора Crown of Calaphas для Shadow Demon.",
      "price": 699,
      "stock": 1,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2020/08/296.jpeg",
      "img2": "https://collectorsshop.ru/img/catalog/items/item_gallery/2020/08/296_3_1692598262.png",
      "videoLink": "https://collectorsshop.ru/img/catalog/items/video/296.mp4"
    },
    {
      "id": 5,
      "itemName": "Glory of the Elderflame",
      "category": "The International 2020",
      "type": "bundle",
      "hero": "Lina",
      "rarity": "Mythical",
      "description": "Содержит все предметы из набора Glory of the Elderflame для Lina.",
      "price": 3499,
      "stock": 1,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2020/07/264_0.png",
      "img2": "https://collectorsshop.ru/img/catalog/items/item_gallery/2020/07/264_0_1193738781.png",
      "videoLink": "https://collectorsshop.ru/img/catalog/items/video/264.mp4"
    },
    {
      "id": 6,
      "itemName": "Fowl Omen",
      "category": "The International 2019",
      "type": "bundle",
      "hero": "Necrophos",
      "rarity": "Mythical",
      "description": "Содержит все предметы из набора Fowl Omen для Necrophos.",
      "price": 1500,
      "stock": 2,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2019/12/180_1.jpeg",
      "img2": "https://collectorsshop.ru/img/catalog/items/item_gallery/2019/12/180_0_1075385146.png",
      "videoLink": "https://collectorsshop.ru/img/catalog/items/video/180.mp4"
    },
    {
      "id": 7,
      "itemName": "Golden Sullen Sanctum",
      "category": "The International 2022",
      "type": "item",
      "hero": "Necrophos",
      "rarity": "Immortal",
      "description": "Золотая версия Immortal-предмета Sullen Sanctum для Necrophos. Даже удальцы, способные вытерпеть смрад Ротунд'йера, бледнеют от одного вида сопровождающей его загробной паствы, жаждущей принести неминуемую весть.",
      "price": 600,
      "stock": 1,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2022/11/575.png",
      "img2": "",
      "videoLink": ""
    },
    {
      "id": 8,
      "itemName": "Draca Mane",
      "category": "The International 2022",
      "type": "item",
      "hero": "Huskar",
      "rarity": "Immortal",
      "description": "Лишь глубоководное давление не даёт выделениям угрей-драконов бесконечно вырабатывать бушующее пламя — однако Хускар, искажённый попаданием в мир Нотл, обратил смертоносный огонь в полыхающее превращение.",
      "price": 500,
      "stock": 30,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2022/11/581.png",
      "img2": "",
      "videoLink": ""
    },
    {
      "id": 9,
      "itemName": "Pursuit of the Ember Demons",
      "category": "The International 2019",
      "type": "bundle",
      "hero": "Huskar",
      "rarity": "Mythical",
      "description": "Содержит загрузочный экран и все предметы из набора Pursuit of the Ember Demons для Huskar.",
      "price": 1999,
      "stock": 5,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2019/12/154_3.jpeg",
      "img2": "https://collectorsshop.ru/img/catalog/items/item_gallery/2019/12/154_3_1783885037.png",
      "videoLink": "https://collectorsshop.ru/img/catalog/items/video/154.mp4"
    },
    {
      "id": 10,
      "itemName": "Dapper Disguise",
      "category": "The International 2019",
      "type": "bundle",
      "hero": "Pudge",
      "rarity": "Mythical",
      "description": "Содержит загрузочный экран и все предметы из набора Dapper Disguise для Pudge",
      "price": 5000,
      "stock": 1,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2019/12/184_1.jpeg",
      "img2": "https://collectorsshop.ru/img/catalog/items/item_gallery/2019/12/184_1_345410294.png",
      "videoLink": "https://collectorsshop.ru/img/catalog/items/video/184.mp4"
    },
    {
      "id": 11,
      "itemName": "Raptures of the Abyssal Kin",
      "category": "The International 2019",
      "type": "bundle",
      "hero": "Queen of Pain",
      "rarity": "Mythical",
      "description": "Содержит все предметы из набора Raptures of the Abyssal Kin для Queen of Pain",
      "price": 1999,
      "stock": 3,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2019/12/47_1.jpeg",
      "img2": "https://collectorsshop.ru/img/catalog/items/item_gallery/2019/12/47_2_392899521.png",
      "videoLink": "https://collectorsshop.ru/img/catalog/items/video/47.mp4"
    },
    {
      "id": 12,
      "itemName": "Fate Meridian",
      "category": "The International 2018",
      "type": "bundle",
      "hero": "Invoker",
      "rarity": "Mythical",
      "description": "Содержит загрузочный экран и все предметы из набора Fate Meridian для Invoker",
      "price": 3999,
      "stock": 1,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2019/12/38_3.jpeg",
      "img2": "https://collectorsshop.ru/img/catalog/items/item_gallery/2019/12/38_2_483825866.png",
      "videoLink": "https://collectorsshop.ru/img/catalog/items/video/38.mp4"
    },
    {
      "id": 13,
      "itemName": "Trail of the Sanguine Spectrum",
      "category": "The International 2018",
      "type": "bundle",
      "hero": "Bloodseeker",
      "rarity": "Mythical",
      "description": "Содержит все предметы из набора Trail of the Sanguine Spectrum для Bloodseeker.",
      "price": 600,
      "stock": 50,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2019/12/45_1.jpeg",
      "img2": "https://collectorsshop.ru/img/catalog/items/item_gallery/2019/12/45_0_442526127.png",
      "videoLink": "https://collectorsshop.ru/img/catalog/items/video/45.mp4"
    },
    {
      "id": 14,
      "itemName": "Covenant of the Depths",
      "category": "The International 2017",
      "type": "bundle",
      "hero": "Invoker",
      "rarity": "Mythical",
      "description": "Содержит загрузочный экран и все предметы из набора Covenant of the Depths для Invoker.",
      "price": 8000,
      "stock": 1,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2019/12/80.png",
      "img2": "https://collectorsshop.ru/img/catalog/items/item_gallery/2019/12/80_1_1034138165.png",
      "videoLink": "https://collectorsshop.ru/img/catalog/items/video/80.mp4"
    },
    {
      "id": 15,
      "itemName": "Shadowforce Gale",
      "category": "The International 2017",
      "type": "bundle",
      "hero": "Luna",
      "rarity": "Mythical",
      "description": "Содержит загрузочный экран и все предметы из набора Shadowforce Gale для Luna.",
      "price": 899,
      "stock": 40,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2019/12/92_1.jpeg",
      "img2": "https://collectorsshop.ru/img/catalog/items/item_gallery/2019/12/92_3_392147191.png",
      "videoLink": "https://collectorsshop.ru/img/catalog/items/video/92.mp4"
    },
    {
      "id": 16,
      "itemName": "Feast of Abscession",
      "category": "",
      "type": "item",
      "hero": "Pudge",
      "rarity": "Arcana",
      "description": "Много веков назад румуссская волшебница Крелла сковала нерушимый крюк на цепи, что остановил бы самых могучих прислужников Мёртвого бога и отвадил бы погибель от её избранников. Но мор Мёртвого бога превзошёл даже легендарные заклинания Креллы. Одержимые песнью панихиды, цепи оставили свою госпожу и стали сокрушать её подданных, подчиняясь приказам Мёртвого бога. Теперь же, давно исполнив своё нечистое предназначение, цепи поклялись служить новому господину... и его упоительному ремеслу.",
      "price": 1649,
      "stock": 1,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2020/01/224_1.png",
      "img2": "",
      "videoLink": ""
    },
    {
      "id": 17,
      "itemName": "Fiery Soul of the Slayer",
      "category": "",
      "type": "item",
      "hero": "Lina",
      "rarity": "Arcana",
      "description": "Многие знают, что волосы Lina благословлены огнём, но лишь некоторые знают, почему. Когда Lina была ещё совсем молодой, именно дымящиеся и тлеющие волосы были первым признаком того, что она обладает огромной силой. Потребовались годы усердных тренировок, чтобы волшебница смогла контролировать подобные проявления своего таланта. Но, тем не менее, эту силу нельзя скрывать вечно, и в самые напряжённые моменты битвы волосы Lina вспыхивают, показывая абсолютную концентрацию и высшую степень владения пламенем, которое способно испепелить всё на своем пути.",
      "price": 1550,
      "stock": 1,
      "img1": "https://collectorsshop.ru/img/catalog/items/main_images/2020/01/214.png",
      "img2": "",
      "videoLink": ""
    },
    {
      "id": 18,
      "itemName": "Fire Tribunal Helm",
      "category": "",
      "type": "item",
      "hero": "Dragon Knight",
      "rarity": "Common",
      "description": "Шлем Fire Tribunal для Dragon Knight",
      "price": 2,
      "stock": 100,
      "img1": "https://cdn.dota2.net//item/Fire%20Tribunal%20Helm/300.png",
      "img2": "",
      "videoLink": ""
    },
    {
      "id": 19,
      "itemName": "Iris of the Equilibrium",
      "category": "",
      "type": "bundle",
      "hero": "Ancient Apparition",
      "rarity": "Uncommon",
      "description": "Содержит все предметы из набора Iris of the Equilibrium для Ancient Apparition.",
      "price": 600,
      "stock": 6,
      "img1": "https://cdn.dota2.net//item/Iris%20of%20the%20Equilibrium/300.png",
      "img2": "",
      "videoLink": ""
    },
    {
      "id": 20,
      "itemName": "Inscribed Guise of the Winged Bolt",
      "category": "",
      "type": "bundle",
      "hero": "Drow Ranger",
      "rarity": "Rare",
      "description": "Содержит загрузочный экран и все предметы из набора Guise of the Winged Bolt для Drow Ranger.",
      "price": 650,
      "stock": 3,
      "img1": "https://cdn.dota2.net//item/Inscribed%20Guise%20of%20the%20Winged%20Bolt/300.png",
      "img2": "",
      "videoLink": ""
    },
    {
      "id": 21,
      "itemName": "The Abscesserator",
      "category": "",
      "type": "bundle",
      "hero": "Pudge",
      "rarity": "Legendary",
      "description": "Почему это сочные кишочки должны украшать лишь подбородок?",
      "price": 510,
      "stock": 30,
      "img1": "https://cdn.dota2.net//item/The%20Abscesserator%20Bundle/300.png",
      "img2": "https://static.wikia.nocookie.net/dota2_gamepedia/images/5/56/Cosmetic_icon_The_Abscesserator.png/revision/latest?cb=20200526131157",
      "videoLink": "https://static.wikia.nocookie.net/dota2_gamepedia/images/a/ae/The_Abscesserator_Ambient.webm/revision/latest?cb=20200526131616"
    }
];

import { cardsTemplates } from "../templates/cards";
import { productInfo } from "../templates/product-info";

class Cards {
    mainPage;
    cardsDOM;
    constructor(cardsDOM: HTMLElement) {
        this.mainPage = new MainPage(testBD);
        this.cardsDOM = cardsDOM;
    }

    render() {
        let result = '';
        this.mainPage.getCards().forEach((card) => {
            result += `
            <li class="goods-cards__item card" data-id="${card.id}" style="background: no-repeat center url(${card.img1}) var(--color-dark); background-size: cover">
                <div class="card__hero hero" data-id="${card.id}">
                <img
                    src="https://s3-alpha-sig.figma.com/img/e2c1/7f50/bb040d2c866e3bc6b7c2958854abdc43?Expires=1673222400&Signature=fyaWCoo0grTmQyPbIyk~f3UWoYJ7kibcwrYPkIrRrVi4tu1k2xczyiL8uaCvnxmwcUt7s69-zWphqdEEG2sdFgvqg60KISNJz3tS-6X4uzZorXAbbjcrnYJ1zS5pjZ3i0kv6bHCc1lIzv0u-TxyKAqlALNAqiHfeErlSPaFlNu83TPBSRFBXCEQiT5WjQLP3YJmEKVmsE4mpNKClDwd-k0vaLw5RcsATKKS2kgF1s6rOmXn1wVESUKT0XyyTW5tuSZSvP60kTjj8bE6Y~jcqPv77DDbUe62xNqToCP4ZAzwagr7A0TgP3gGkQzfNsZ1c55HC30LadIu~-AeqeIAaGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="" class="hero__avatar" data-id="${card.id}">
                <span class="hero__name" data-id="${card.id}">${card.hero}</span>
                <span class="hero__rareness ${card.rarity.toLowerCase()}" data-id="${card.id}">${card.rarity}</span>
                </div>
                <div class="card__price" data-id="${card.id}">
                <span class="card__price-val" data-id="${card.id}">${card.price}</span>
                <span class="card__price-cur" data-id="${card.id}">руб</span>
                </div>
                <h3 class="card__name" data-id="${card.id}">${card.itemName}</h3>
                <button class="card__buy">В&nbsp;корзину</button>
            </li>
            `;
        });
        this.cardsDOM.innerHTML = result;
        const findDOM = document.querySelector('.goods-cards__head-find-num') as HTMLElement;
        findDOM.textContent = `${this.mainPage.getCards().length}`;
    }
}

class AppView {
    title;
    location;
    appDOM;
    constructor (title: string, location: string, appDOM: HTMLElement) {
        this.title = title;
        this.location = location;
        this.appDOM = appDOM;
    }

    init() {
        history.pushState({}, this.title, this.location);

        switch (this.location) {
            case '/':
                document.title = this.title;
                this.appDOM.innerHTML = cardsTemplates;
                new Cards(document.querySelector('.goods-cards__list') as HTMLElement).render();
            break;
            case '/product-details':
                this.appDOM.innerHTML = productInfo;
            break;
        }
    }
}

// example:
// const app = new AppView('Secret Shop - Product', '/product', document.querySelector('.main') as HTMLElement).init();
// const app = new AppView('Secret Shop', '/', document.querySelector('.main') as HTMLElement).init();

export {AppView, Cards};