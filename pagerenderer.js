const rootDiv = document.querySelector("#root");
const links = ['/home.html', '/school_projects.html', '/personal_projects/personal_projects.html', '/resume.html', '/blog.html'];

async function loadHome(){
    const res = await fetch(links[0]);
    const html = await res.text();
    rootDiv.innerHTML = html;
}

function linkListeners(){
    const linkList = document.querySelectorAll('.nav-items li');
    linkList.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            let url = link.textContent;
    
            switch(url){
                case "Home":
                    url = "/home.html";
                    break;
                case "School Projects":
                    url = "/school_projects.html";
                    break;
                case "Personal Projects":
                    url = "/personal_projects/personal_projects.html";
                    break;
                case "Resume":
                    url = "/resume.html";
                    break;
                case "Blog":
                    url = "/blog.html";
                    break;
            }
    
            linkList.forEach(element => {
                element.classList.remove("current-active-link");
            });
    
            link.classList.add("current-active-link");
    
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    const container = document.querySelector('#root');
                    container.innerHTML = html;
                });
        });
    });

}

loadHome();
linkListeners();