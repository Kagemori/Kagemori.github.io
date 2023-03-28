function MainContent(){
    return (
        <section className="section">
		    <h1>Welcome!</h1>
		    <br />
	    	<p>My name is Keith Estrella and this is my little part of the web! I recently graduated from University and have been studying computer programming first through Machine Learning and recently I've picked up Web Development.
	    	Don't mind me as I try and put what I've studied to use in the making of this website. Odds are I may make a mistake or two as I continue practicing my programming skills on here. :D</p>
	    </section>
    )
}

function SideContent(){
    return (
        <aside className="aside">
		    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vero perferendis autem harum excepturi placeat asperiores eum? Dignissimos aspernatur suscipit dolore. Eos hic, autem quaerat harum labore fuga id numquam. </p>
	    </aside>
    )
}

function Page(){
    return (
        <div id="index">
            <MainContent />
            <SideContent />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))