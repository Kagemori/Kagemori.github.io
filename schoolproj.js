function MainContent(){
    return (
        <section className="section" id="schoolproj">
            <h1>Master Year College: 2020 - 2021 [<a href="https://github.com/Kagemori/2020-2021">GitHub</a>]</h1><br/>
            <p>My name is Keith Estrella! And this is my little part of the web! I'm recently graduated from University and have been studying computer programming first through Machine Learning and recently I've picked up Web Development.

            Don't mind me as I try and put what I've studied to use in the making of this website. Odds are I may make a mistake or two as I continue practicing my Programming Skills on here. :D</p>
            <br/><h1>4th Year College: 2019 - 2020 [<a href="https://github.com/Kagemori/2019-2020">GitHub</a>]</h1><br/>
            <br/><h1>3rd Year College: 2018 - 2019 [<a href="https://github.com/Kagemori/2018-2019">GitHub</a>]</h1><br/>
            <br/><h1>2nd Year College: 2017 - 2018 [<a href="https://github.com/Kagemori/2017-2018">GitHub</a>]</h1><br/>
            <br/><h1>1st Year College: 2016 - 2017</h1><br/>
            <br/><h1>High School: 2012 - 2016 [<a href="https://github.com/Kagemori/2014-2015">GitHub</a>]</h1><br/>
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