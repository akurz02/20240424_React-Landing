import React from "react";
import Card from "./Card";

const Deck = () => {
	return (
		<>
		<div className="row">
			<div className="col"><Card /></div>
			<div className="col"><Card /></div>
			<div className="col"><Card /></div>
			<div className="col"><Card /></div>
		</div>
		</>

	);
}

export default Deck;