
let location_div = document.createElement("div");
    location_div.classList.add("location");


const activeBtn = (btn)=>{
    const buttonActive = document.querySelector(".button.active");
    if(buttonActive) buttonActive.classList.remove("active");

    const homeButton = document.getElementById(btn);
    homeButton.classList.add("active");

}



let location_info = () => {
    
    activeBtn("location");
    const locationH3 = document.createElement("h3");
    locationH3.classList.add("location-h3");
    locationH3.textContent = "Find us on Google Maps";
    location_div.appendChild(locationH3);
    const frame = document.createElement("iframe");
    frame.classList.add("location-frame");
    frame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12182.762291254012!2d23.5847539!3d40.2381816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1c29ca19ab5e0ae!2sAmari%20Hotel!5e0!3m2!1sen!2sgr!4v1659884387019!5m2!1sen!2sgr";
    frame.width = "700";
    frame.height = "400";
    frame.style = "border:0";
    
    location_div.appendChild(frame);
    

    return location_div;

    }

    const loadLocation= () => {
        let mainContent = document.getElementById("main-content");
        mainContent.textContent = "";
        location_div.innerHTML = "";
        location_info();
        mainContent.appendChild(location_div);
        return mainContent;
    }


export default loadLocation;
