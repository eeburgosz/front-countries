import React from "react";
import style from "./Home.module.css";
import { CardsContainer, Filtros } from "../../components";

export const HomePage = () => {
	return (
		<div className={style.container}>
			<Filtros />
			<div className={style.subcontainer}>
				<CardsContainer />
			</div>
		</div>
	);
};
