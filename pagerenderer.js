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
            let url2 = link.textContent;
    
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
                    // const container = document.querySelector('#root');
                    // container.innerHTML = html;

                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = html;

                    const container = document.querySelector('#root');
                    let newContent = "";

                    switch(url2){
                        case "Home":
                            newContent = tempDiv.querySelector("#root-home");
                            break;
                        case "School Projects":
                            newContent = tempDiv.querySelector("#root-school");
                            break;
                        case "Personal Projects":
                            newContent = tempDiv.querySelector("#root-personal");
                            break;
                        case "Resume":
                            newContent = tempDiv.querySelector("#root-resume");
                            break;
                        case "Blog":
                            newContent = tempDiv.querySelector("#root-blog");
                            break;
                    }

                    if(newContent){
                        container.innerHTML = '';

                        const children = Array.from(newContent.children);

                        const clone = newContent.cloneNode(false);
                        container.appendChild(clone);

                        children.forEach((child, index) => {
                            child.classList.add('stagger-fade');
                            child.style.animationDelay = `${index * 100}ms`;
                            clone.appendChild(child);
                        })
                    }
                });
        });
    });

}

loadHome();
linkListeners();