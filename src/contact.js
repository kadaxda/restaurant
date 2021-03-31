function loadContact() {
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
    navMenu.classList.add("navContent")
    topnav.appendChild(navMenu);

    let navContact = document.createElement("a");
    navContact.textContent = "Contact";
    navContact.classList.add("navContent")
    navContact.classList.add("active");
    topnav.appendChild(navContact);

    let header = document.createElement("h1");
    header.textContent = "Contact Us"
    content.appendChild(header)

    let subheader = document.createElement("h2");
    subheader.textContent = "Please fill this form in a decent manner";
    content.appendChild(subheader);

    let formContainer = document.createElement("div");
    formContainer.classList.add("form");
    content.appendChild(formContainer);

        let fullname = document.createElement("p");
        fullname.textContent = "Full Name *";
        formContainer.appendChild(fullname)

        let fullnameInput = document.createElement("input");
        fullnameInput.setAttribute("type", "text");
        formContainer.appendChild(fullnameInput)

        let email = document.createElement("p");
        email.textContent = "E-mail *";
        formContainer.appendChild(email)

        let emailInput = document.createElement("input");
        emailInput.setAttribute("type", "text");
        formContainer.appendChild(emailInput)

        let msg = document.createElement("p");
        msg.textContent = "Message *";
        formContainer.appendChild(msg)
        
        let msgInput = document.createElement("input");
        msgInput.setAttribute("type", "text");
        msgInput.setAttribute("id", "MsgInput");
        formContainer.appendChild(msgInput)

        let submit = document.createElement("button");
        submit.setAttribute("type", "submit");
        submit.textContent = "Submit";
        formContainer.appendChild(submit)
}

export { loadContact }