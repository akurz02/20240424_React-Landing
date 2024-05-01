import React from "react";
import card from "../../styles/card.css";

const Card = () => {
	return (
		<>
			<div className="card" style={{width: "18rem"}}>
			<div className="card-head">500 x 325</div>
  			<div className="card-body">
    		<h5 className="card-title">Card title</h5>
			<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			<a href="#" className="btn btn-primary">Find Out More!</a>
  			</div>
			</div>
			
		</>

	);
}

export default Card;