
// Imports
import { loadHome } from "./home"

function init() {
    loadHome();
}


// init();

function loadMenu() {
    let content = document.querySelector("#content");
    document.body.style.backgroundColor = 'rgb(' + [241, 141, 123].join(',') + ')';
    
    let topnav = document.createElement("div");
    topnav.classList.add("topnav");
    content.appendChild(topnav);

    let navHome = document.createElement("a");
    navHome.textContent = "Home";
    topnav.appendChild(navHome);

    let navMenu = document.createElement("a");
    navMenu.textContent = "Menu";
    navMenu.classList.add("active");
    topnav.appendChild(navMenu);

    let navContact = document.createElement("a");
    navContact.textContent = "Home";
    topnav.appendChild(navContact);

}

init();

