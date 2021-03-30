
// Imports
import { loadHome } from "./home"
import { loadMenu } from "./menu"



function init() {
    loadHome();
}

function wipeOut() {
    let content = document.querySelector("#content")
    document.body.removeChild(content)
    document.body.style.backgroundImage = "none";
}

init();
check();


function check() {
    let navContent = document.querySelectorAll(".navContent");
        console.log(navContent)

        navContent.forEach((tab) => {
            tab.addEventListener("click", () => {
                if(tab.innerHTML == "Menu") {
                    wipeOut();
                    loadMenu();
                    check();
                } else if(tab.innerHTML == "Home") {
                    wipeOut();
                    loadHome();
                    check();
                }
            })
        }) 
    }

function loadContact() {

}


