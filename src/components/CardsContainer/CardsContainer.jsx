import React, { useEffect, useState } from "react";
import style from "./CardsContainer.module.css";
import { Cards, Paginado } from "../";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux-toolkit/thunks";
import { setCurrentPage } from "../../redux-toolkit/countriesSlice";

export const CardsContainer = () => {
	const { countries, isLoading, currentPage } = useSelector(
		(state) => state.countries
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCountries());
	}, [dispatch]);

	// eslint-disable-next-line
	const [countriesPerPage, setCountriesPerPage] = useState(9);
	const indexOfLastCountry = currentPage * countriesPerPage;
	const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
	const currentCountry = countries.slice(
		indexOfFirstCountry,
		indexOfLastCountry
	);

	const paginator = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber));
	};

	return (
		<div className={style.container}>
			{isLoading ? (
				<h2>Cargando</h2>
			) : currentCountry.length === 0 ? (
				<h2>Countries not found</h2>
			) : (
				currentCountry.map((country) => (
					<Cards
						key={country.id}
						id={country.id}
						flag={country.flag}
						name={country.name}
						continent={country.continent}
					/>
				))
			)}
			<Paginado
				countries={countries.length}
				countriesPerPage={countriesPerPage}
				paginator={paginator}
			/>
		</div>
	);
};
