
let infoSec = document.createElement("div");
infoSec.classList.add("info-section");


const activeBtn = (btn)=>{
    const buttonActive = document.querySelector(".button.active");
    if(buttonActive) buttonActive.classList.remove("active");

    const homeButton = document.getElementById(btn);
    homeButton.classList.add("active");
}

const loadInfo= () => {
    let mainContent = document.getElementById("main-content");
    mainContent.textContent = ""
    infoSec.innerHTML = `The Amari Hotel is located in the small village in Sithonia-Halkidiki Metamorfossi.
    It is an apartment complex with a total of 31 residential units for 2-5 people (35-40 sqm) and 4 apartments for 2 persons, grouped in a well-kept gardens around the swimming pools. Our family-run hotel is very suitable for a relaxing family holiday.
    Both for large and for the younger guests, offers the opportunity for a relaxing and enjoyable holiday.`
    activeBtn("info");
    

    mainContent.appendChild(infoSec);

    return mainContent;
}


export default loadInfo;
