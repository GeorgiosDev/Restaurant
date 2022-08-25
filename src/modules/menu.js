//My module for each recipe 
import Souvlaki from "../images/souvlaki.jpg"
import Salad from "../images/greek salad.jpg"
import Gemista from "../images/gemista.jpg"
import Mousaka from "../images/mousaka.jpg"
import Kokkinisto from "../images/kokkinisto.jpg"
import Saganaki from "../images/saganaki.jpg"
import Pie from "../images/pie.jpg"
import Octapus from "../images/octapus.jpg"


let catalog = document.createElement("div");
catalog.classList.add("catalog");


const activeBtn = (btn)=>{
    const buttonActive = document.querySelector(".button.active");
    if(buttonActive) buttonActive.classList.remove("active");

    const homeButton = document.getElementById(btn);
    homeButton.classList.add("active");
};



const createMenu = () => {
    
    const food1 = document.createElement("div");
    const foodSpan1 = document.createElement("span");
    foodSpan1.classList.add("food-span");
    foodSpan1.textContent = "Souvlaki";
    food1.classList.add("food");
    const souvlaki = new Image();
    souvlaki.src = Souvlaki;
    souvlaki.classList.add("image");
    food1.appendChild(souvlaki);
    food1.appendChild(foodSpan1)
    
    const food2 = document.createElement("div");
    const foodSpan2 = document.createElement("span");
    foodSpan2.classList.add("food-span");
    foodSpan2.textContent = "Choriatiki";
    food2.classList.add("food");
    const salad = new Image()
    salad.src = Salad
    salad.classList.add("image")
    food2.appendChild(salad)
    food2.appendChild(foodSpan2)

    const food3 = document.createElement("div");
    const foodSpan3 = document.createElement("span");
    foodSpan3.classList.add("food-span");
    foodSpan3.textContent = "Mousaka";
    food3.classList.add("food");
    const mousaka = new Image();
    mousaka.src = Mousaka;
    mousaka.classList.add("image")
    food3.appendChild(mousaka)
    food3.appendChild(foodSpan3)
    
    const food4 = document.createElement("div");
    const foodSpan4 = document.createElement("span");
    foodSpan4.classList.add("food-span");
    foodSpan4.textContent = "Saganaki";
    food4.classList.add("food");
    const saganaki = new Image();
    saganaki.src = Saganaki;
    saganaki.classList.add("image");
    food4.appendChild(saganaki);
    food4.appendChild(foodSpan4);;

    const food5 = document.createElement("div");
    const foodSpan5 = document.createElement("span");
    foodSpan5.classList.add("food-span");
    foodSpan5.textContent = "Gemista";
    food5.classList.add("food");
    const gemista = new Image();
    gemista.src = Gemista;
    gemista.classList.add("image"); 
    food5.appendChild(gemista);
    food5.appendChild(foodSpan5);

    const food6 = document.createElement("div");
    const foodSpan6 = document.createElement("span");
    foodSpan6.classList.add("food-span");
    foodSpan6.textContent = "Kokkinisto";
    food6.classList.add("food");
    const kokkinisto = new Image();
    kokkinisto.src = Kokkinisto;
    kokkinisto.classList.add("image")
    food6.appendChild(kokkinisto);
    food6.appendChild(foodSpan6);

    

    catalog.append(food1,food2,food3,food4,food5,food6)

    return catalog;
    }
    

    const loadMenu = () => {
        let mainContent = document.getElementById("main-content");
        mainContent.innerHTML = "";
        catalog.innerHTML = ""
        activeBtn("menu");
        createMenu();
        mainContent.appendChild(catalog);
        return mainContent;
    }





export default loadMenu;