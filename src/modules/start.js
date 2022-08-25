const headerFunc = (id,text)=>{
    const header = document.createElement("header");
    header.setAttribute("id", id);
    const logo = document.createElement("h1");
    logo.textContent = text;
    header.appendChild(logo);
    return header;
}


const buttonFunc = (id,text)=> {
    const button = document.createElement("button");
    button.setAttribute("id",id);
    const span =document.createElement("span");
    span.textContent = text;
    button.classList.add("button");
    button.appendChild(span)
    return button;
}

const navbarFunc = (id) => {
    const nav = document.createElement("nav");
    nav.setAttribute("id", id);
    const infoBtn = buttonFunc("info", "info");
    const menuBtn = buttonFunc("menu", "menu");
    const locationBtn = buttonFunc("location", "location");

    nav.append(infoBtn,menuBtn,locationBtn);
    return nav;
}

const mainSec = (id) => {
    const main = document.createElement("main");
    main.setAttribute('id',id);
    return main;
}


const websiteStart = () => {
    const content = document.getElementById("content");
    const header = headerFunc("header", "Hotel Amari Restaurant");
    content.appendChild(header);


    const nav = navbarFunc("nav");
    content.appendChild(nav);

    const mainContent = mainSec("main-content");
    content.appendChild(mainContent);


}

export default websiteStart