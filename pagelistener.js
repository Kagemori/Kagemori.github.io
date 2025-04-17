const links = document.querySelectorAll('.nav-items li');

console.log(links)

links.forEach(link => {
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

		links.forEach(element => {
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