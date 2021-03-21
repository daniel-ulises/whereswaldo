import React from "react";
import Logo from "../assets/img/waldo-logo.png";
import Level1 from "../assets/img/wally1.jpg";
import Level2 from "../assets/img/wally2.jpg";
import Level3 from "../assets/img/wally3.jpg";
import Footer from "./Footer/Footer";
import "./Main.css";

export default function Main() {
	return (
		<>
			<main>
				<div className="leaders">
					<a href="/leaderboards">
						<span>Leaderboards</span>
					</a>
				</div>
				<div className="logo">
					<img src={Logo} alt="Waldo Logo" />
				</div>
				<div className="welcome">
					<h2>Welcome to Where's Waldo!</h2>
					<p>
						This is an implementation of the famous <em>Where's Waldo</em> game most of
						us know and have played at some point in our lives. The way to play it is
						quite easy, you just select a level and find Waldo, once you've found him
						you just click on him. You will also be able to enter the leaderboards and
						compete with others in how fast you were!
					</p>
				</div>
				<div className="levels">
					<div>
						<a href="/level-1">
							<img src={Level1} alt="Level 1" />
						</a>
					</div>
					<div>
						<a href="/level-2">
							<img src={Level2} alt="Level 2" />
						</a>
					</div>
					<div>
						<a href="/level-3">
							<img src={Level3} alt="Level 3" />
						</a>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
