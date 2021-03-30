function loadHome() {

    let content = document.createElement("div");
    content.setAttribute("id", "content")
    document.body.appendChild(content)

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
    navHome.classList.add("navContent")
    topnav.appendChild(navHome);

    let navMenu = document.createElement("a");
    navMenu.textContent = "Menu";
    navMenu.classList.add("navContent")
    topnav.appendChild(navMenu);

    let navContact = document.createElement("a");
    navContact.textContent = "Contact";
    navContact.classList.add("navContent")
    topnav.appendChild(navContact);

    let header = document.createElement("h1");
    header.textContent = "Odins Restaurant";
    content.appendChild(header)

    let text = document.createElement("p");
    text.textContent = `Pancakes, Burgers and more!`
    content.appendChild(text)
    text.classList.add("homeText")
    
}

export { loadHome }