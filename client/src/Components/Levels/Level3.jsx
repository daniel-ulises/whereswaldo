import React, {useState, useEffect} from "react";
import axios from "axios";
import Level from "../../assets/img/wally3.jpg";
import Modal from "../Modal/Modal";
import "./Levels.css";

function Level3() {
	const [coordsY, setCoordsY] = useState({});
	const [coordsX, setCoordsX] = useState({});
	const [timer, setTimer] = useState(1);
	const [found, setFound] = useState(false);

	// API Call to get X and Y coords for Waldo
	useEffect(() => {
		axios.get("/API/level3-coords").then(res => {
			setCoordsY(res.data.coordsY);
			setCoordsX(res.data.coordsX);
		});
	}, []);

	// Increasing the timer each second the player is looking for Waldo
	const time = setTimeout(() => {
		setTimer(timer + 1);
	}, 1000);

	// Shorthand to stop the timer, setting the time spent looking for Waldo
	found && clearTimeout(time);

	// Checking the X and Y coords to see if Waldo is where you click
	const eventHandler = e => {
		if (
			e.nativeEvent.offsetY >= coordsY.min &&
			e.nativeEvent.offsetY <= coordsY.max &&
			e.nativeEvent.offsetX >= coordsX.min &&
			e.nativeEvent.offsetX <= coordsX.max
		) {
			console.log("You did ut!");

			setFound(true); // Make the Modal appear to input your name
		}
	};

	return (
		<>
			<nav>
				<a href="/">
					<h4>Home</h4>
				</a>
			</nav>
			<div className="game">
				<img src={Level} alt="Level 3" onClick={eventHandler} className="level-img" />
			</div>
			{found ? <Modal time={timer} level={3} /> : null}
		</>
	);
}

export default Level3;
