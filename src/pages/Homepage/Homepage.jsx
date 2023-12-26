import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import "./Homepage.css";
export default function Homepage() {
	// http isteği
	// const awaitFetch = async () => {
	// 	let response = await fetch("https://dummyjson.com/products");
	// 	let json = await response.json();
	// 	console.log(json);
	// };



	return (
		<>
		<br/>
		<div>
			<button  className="coolButton2">
			<Link to={"/products"} className="linkStyle">Product</Link>
			</button>
		</div>
		<br/>
		<div>
			<button className="coolButton">
			  <Link to={"/add"} className="linkStyle2">Add</Link>
   			</button>
			
		</div>
		</>
	);
}
