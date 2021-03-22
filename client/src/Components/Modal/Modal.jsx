import React from "react";
import "./Modal.css";

function Modal(props) {
	return (
		<div className="modal-outer">
			<div className="modal-inner">
				<h3>Congratulations! You found him in {props.time} seconds!</h3>
				<p>Now insert your name and be part of the leaderboard!</p>

				<form method="POST" action="https://api.daniel-ulises.me/API/add-score">
					<div>
						<label htmlFor="name" id="name">
							Name
						</label>
						<input type="text" name="name" id="name" autoFocus />
					</div>
					<div>
						<label>Seconds</label>
						<input
							type="text"
							name="time"
							id="time"
							value={props.time}
							readOnly
							className="readonly"
						/>
					</div>
					<div>
						<label>Level</label>
						<input
							type="text"
							name="level"
							id="level"
							value={props.level}
							readOnly
							className="readonly"
						/>
					</div>
					<div>
						<button type="submit" className="submit-score">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Modal;
