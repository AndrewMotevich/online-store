import "./style.scss";
import "./assets/img/error-bg.jpg";
import "./assets/img/logo.png";
import "./assets/img/basket.png";
import "./assets/img/gold.png";
import { AppView } from "./components/appView";
const app = new AppView('Secret Shop', '/', document.querySelector('.main') as HTMLElement);
app.init();