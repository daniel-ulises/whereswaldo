import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Main from "./Components/Main";
import {Level1, Level2, Level3} from "./Components/Levels/index";
import Leaderboard from "./Components/Leaderboard/Leaderboard.jsx";

export default function App() {
	return (
		<Router basename="/">
			<Route exact path="/waldo" component={Main} />
			<Route path="/level-1" component={Level1} />
			<Route path="/level-2" component={Level2} />
			<Route path="/level-3" component={Level3} />
			<Route path="/leaderboards" component={Leaderboard} />
		</Router>
	);
}
