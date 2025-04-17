function Navigation(){
    let topHeadNav = document.querySelector("#top-header-navigation");
    
    let navDiv = document.createElement("nav");
    let h1Div = document.createElement("h1");
    let listDiv = document.createElement("ul");

    navDiv.classList.add("nav");
    listDiv.classList.add("nav-items");

    listDiv.appendChild(addListLink("Home"));
    listDiv.appendChild(addListLink("School Projects"));
    listDiv.appendChild(addListLink("Personal Projects"));
    listDiv.appendChild(addListLink("Resume"));
    listDiv.appendChild(addListLink("Blog"));

    h1Div.textContent = `Keith's Personal Github Website`;

    topHeadNav.appendChild(h1Div);
    topHeadNav.appendChild(listDiv);
    topHeadNav.classList.add("nav");

    // navDiv.appendChild(h1Div);
    // navDiv.appendChild(listDiv);
    
    // topHeadNav.appendChild(navDiv);
}

function addListLink(linkName){
    let listDiv = document.createElement("li");
    listDiv.textContent = linkName;
    return listDiv;
}

function Footer(){
    let footerDiv = document.querySelector("#footer-copy");

    let footerTag = document.createElement("footer");
    footerTag.classList.add("footer");

    let pTag = document.createElement("p");
    pTag.textContent = `Copyright 2025 \u00A9 Keith's Website`;

    footerTag.appendChild(pTag);
    footerDiv.appendChild(footerTag);
}

Navigation();
Footer();