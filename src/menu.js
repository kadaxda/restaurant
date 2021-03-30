function loadMenu() {

    let menu = {
        pancake: "5$",
        milkshake: "3$",
        burger: "4$",
    }

    let pictures = ["css/pancakeMenu.jpg", "css/milkshakeMenu.jpg",
    "css/hamburgerMenu.jpg"];

    let content = document.createElement("div");
    content.setAttribute("id", "content")
    document.body.appendChild(content)

    document.body.style.backgroundColor = 'rgb(' + [241, 141, 123].join(',') + ')';
    
    let topnav = document.createElement("div");
    topnav.classList.add("topnav");
    content.appendChild(topnav);

    let navHome = document.createElement("a");
    navHome.textContent = "Home";
    navHome.classList.add("navContent")
    topnav.appendChild(navHome);

    let navMenu = document.createElement("a");
    navMenu.textContent = "Menu";
    navMenu.classList.add("active");
    navMenu.classList.add("navContent")
    topnav.appendChild(navMenu);

    let navContact = document.createElement("a");
    navContact.textContent = "Contact";
    navContact.classList.add("navContent")
    topnav.appendChild(navContact);

    let header = document.createElement("h1");
    header.textContent = "Menu"
    content.appendChild(header)

    let menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");
    content.appendChild(menuContainer);


    let i = 0;
    for(let [food, price] of Object.entries(menu)) {
        
        let eachMenu = document.createElement("div");
        eachMenu.classList.add("eachMenu");
        menuContainer.appendChild(eachMenu);

        let foodName = document.createElement("p");
        foodName.textContent = food;
        eachMenu.appendChild(foodName);

        let priceName = document.createElement("p");
        priceName.textContent = price;
        eachMenu.appendChild(priceName)

        let image = document.createElement("img");
        image.setAttribute("src", pictures[i]);
        eachMenu.appendChild(image)
        i++;
            
    }

    
}

export { loadMenu }