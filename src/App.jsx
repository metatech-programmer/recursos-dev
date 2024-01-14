import React from "react";
import links from "./components/Links/links.json";
import LinkMidu from "./components/links-midu/LinksMidu";

import "./App.css";

function App() {
	return (
		<>
				<div id="top" />
			<main className="w-screen h-auto bg-gradient-to-b from-zinc-950 to-100% to-zinc-800 pt-10">
				<h1 className="font-bold text-zinc-300 text-3xl md:text-5xl text-center ">
					&#128526; &middot; Recursos Dev &middot; &#128526;
				</h1>
				<hr className="w-11/12 mx-auto mt-10 border-zinc-900" />
				<div className="  p-8 sm:p-12 md:p-32 text-slate-100 flex flex-wrap justify-center items-center gap-3 overflow-y-scroll w-full h-full">
					<LinkMidu jsonData={links} />
				</div>

				<a id="back-top" href="#top">
					UP
				</a>
			</main>
		</>
	);
}

export default App;
