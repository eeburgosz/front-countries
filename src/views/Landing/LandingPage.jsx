import React from "react";
import style from "./LandingPage.module.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
	return (
		<div className={`${style.container} animate__animated animate__fadeInDown`}>
			<div
				className={`${style.subcontainer} animate__animated animate__fadeInDown`}
			>
				<h1>Welcome to the Countries App</h1>
			</div>
			<div
				className={`${style.subcontainer} animate__animated animate__fadeInDown`}
			>
				<Link to="/countries" className="animate__animated animate__fadeInDown">
					<button>Enter</button>
				</Link>
			</div>
		</div>
	);
};
