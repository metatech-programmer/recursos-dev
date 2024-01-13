import React from "react";
import links from "./components/Links/links.json";
import LinkMidu from "./components/links-midu/LinksMidu";

import "./App.css";

function App() {
	return (
		<main className=" w-screen h-screen bg-zinc-950 pt-10 overflow-auto">
			<h1 className="font-bold text-zinc-300 text-7xl text-center">
				Recursos Dev
			</h1>
			<hr className="w-4/5 mx-auto mt-10 border-gray-600" />
			<div className=" bg-zinc-900 p-32 text-slate-100 flex flex-wrap justify-center items-center gap-3">
				<LinkMidu jsonData={links} />\
			</div>
		</main>
	);
}

export default App;
