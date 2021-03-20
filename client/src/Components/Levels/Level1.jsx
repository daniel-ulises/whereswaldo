import React, {useState} from "react";
import axios from "axios";

export default function Level1() {
	const [coordsY, setCoordsY] = useState([]);
	const [coordsX, setCoordsX] = useState([]);

	useEffect(() => {
		axios.get("/API/level1").then(res => {
			setCoordsY(res.data.coordsY);
			setCoordsX(res.data.coordsX);
		});
	}, []);
	return <div></div>;
}
