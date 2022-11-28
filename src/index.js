import websiteStart from "./modules/start"
import "./styles.css"
import loadMenu from "./modules/menu"
import loadLocation from "./modules/location"
import loadInfo from "./modules/info"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const navEvents = ()=> {
    const info = document.getElementById("info");
    const location = document.getElementById("location");
    const menu = document.getElementById("menu");

    info.addEventListener("click" , loadInfo);
    location.addEventListener("click" , loadLocation);
    menu.addEventListener("click", loadMenu);
}


const startFunc = ()=> {
    websiteStart();
    navEvents();   

}

startFunc()



