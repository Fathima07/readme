import * as React from "react";
import {
	HashRouter,
	Link,
	Switch,
	Route,
} from "react-router-dom";
import * as ReactDOM from "react-dom";
import User from "./components/User";
import Home from "./components/Home";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

export default function App() {
	return (
		<HashRouter>

			<Switch>
				
				<Route exact path="/" children={<Home />} />
				<Route path="/users/:username" children={<User />} />
			</Switch>
		</HashRouter>
	);
}

ReactDOM.render(<App />, appDiv);
