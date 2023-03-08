function Navigation(){
    return (
        <div id="header">
            <header>
                <nav className="nav">
                    <h1>Keith's Personal Github Website</h1>
                    <ul className="nav-items">
                        <li><a href="/index.html">Home</a></li>
                        <li><a href="/school_projects.html">School Projects</a></li>
                        <li><a href="/personal_projects/personal_projects.html">Personal Projects</a></li>
                        <li><a href="/resume.html">Resume</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

function Footer(){
    return (
        <footer className="footer">
		    <p>Copyright 2023 &copy; Keith's Website</p>
	    </footer>
    )
}

ReactDOM.render(<Navigation />, document.getElementById("top-header-navigation"))
ReactDOM.render(<Footer />, document.getElementById("footer-copy"))