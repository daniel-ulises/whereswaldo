import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import "./Leaderboard.css";

export default function Leaderboard() {
	const [level1, setLevel1] = useState([]);
	const [level2, setLevel2] = useState([]);
	const [level3, setLevel3] = useState([]);

	useEffect(() => {
		axios
			.get("https://api.daniel-ulises.me/API/level1-score")
			.then(res => setLevel1(res.data))
			.catch(err => console.log(err));

		axios
			.get("https://api.daniel-ulises.me/API/level2-score")
			.then(res => setLevel2(res.data))
			.catch(err => console.log(err));

		axios
			.get("https://api.daniel-ulises.me/API/level3-score")
			.then(res => setLevel3(res.data))
			.catch(err => console.log(err));
	}, []);

	const newLevel1 = level1.map(item => (
		<tr>
			<td>{item.name}</td>
			<td>{item.time}s</td>
		</tr>
	));
	const newLevel2 = level2.map(item => (
		<tr>
			<td>{item.name}</td>
			<td>{item.time}s</td>
		</tr>
	));

	const newLevel3 = level3.map(item => (
		<tr>
			<td>{item.name}</td>
			<td>{item.time}s</td>
		</tr>
	));

	return (
		<>
			<nav>
				<Link to="/waldo">
					<h4>Home</h4>
				</Link>
			</nav>
			<div className="table-container">
				<div className="table-1">
					<div className="table-header">
						<h3>Level 1 Leaderboards</h3>
					</div>
					<table>
						<thead>
							<th>Name</th>
							<th>Time</th>
						</thead>
						<tbody>{newLevel1}</tbody>
					</table>
				</div>
				<div className="table-2">
					<div className="table-header">
						<h3>Level 2 Leaderboards</h3>
					</div>
					<table>
						<thead>
							<th>Name</th>
							<th>Time</th>
						</thead>
						<tbody>{newLevel2}</tbody>
					</table>
				</div>
				<div className="table-3">
					<div className="table-header">
						<h3>Level 3 Leaderboards</h3>
					</div>
					<table>
						<thead>
							<th>Name</th>
							<th>Time</th>
						</thead>
						<tbody>{newLevel3}</tbody>
					</table>
				</div>
			</div>
			<Footer />
		</>
	);
}
