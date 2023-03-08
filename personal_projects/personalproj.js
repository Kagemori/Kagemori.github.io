function MainContent(){
    return (
        <section className="section">
            <h1><a href="./music_player/music_player.html">Simple Music Player</a></h1><br/>
            <p>Music player made by following along with <a href="https://www.youtube.com/watch?v=QTHRWGn_sJw">Traversy Media's video</a>Traversy Media's video teaching how to make it.</p>
            <br/><h1>4th Year College: 2019 - 2020</h1><br/>
            <br/><h1>3rd Year College: 2018 - 2019</h1><br/>
            <br/><h1>2nd Year College: 2017 - 2018</h1><br/>
            <br/><h1>1st Year College: 2016 - 2017</h1><br/>
            <br/><h1>High School: 2012 - 2016</h1><br/>
        </section>
    )
}

function SideContent(){
    return (
        <aside className="aside">
		    <p>I'm in the process of converting most of my School Projects on here to run via GitHub Pages so not all projects will run via this website. Instead I'll link to the repository where I've kept and sorted my classwork by class and school year.</p>
	    </aside>

    )
}

function Page(){
    return(
        <div id="index">
            <MainContent />
            <SideContent />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))