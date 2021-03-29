function loadHome() {

    let content = document.querySelector("#content")

    document.body.style.backgroundImage = "url('css/pancakeBackground.jpg')"; 
    document.body.style.backgroundSize = "cover"; 
    document.body.style.backgroundRepeat = "no-repeat"; 
    document.body.style.backgroundPosition = "center"; 

    let topnav = document.createElement("div");
    topnav.classList.add("topnav");
    content.appendChild(topnav);

    let navHome = document.createElement("a");
    navHome.textContent = "Home";
    navHome.classList.add("active");
    topnav.appendChild(navHome);

    let navMenu = document.createElement("a");
    navMenu.textContent = "Menu";
    topnav.appendChild(navMenu);

    let navContact = document.createElement("a");
    navContact.textContent = "Home";
    topnav.appendChild(navContact);

    let header = document.createElement("h1");
    header.textContent = "Odins Restaurant";
    content.appendChild(header)
}

export { loadHome }