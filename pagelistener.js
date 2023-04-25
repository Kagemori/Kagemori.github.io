const links = document.querySelectorAll('.nav-items a');

links.forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();
		const url = e.target.href;

		fetch(url)
			.then(response => response.text())
			.then(html => {
				const container = document.querySelector('#root');
				container.innerHTML = html;
			});
	});
});