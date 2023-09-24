import React, { useState } from "react";
import style from "./CreatePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../redux-toolkit/thunks";
import {
	validatorCountries,
	validatorDuration,
	validatorName,
	validatorSeason,
} from "../../utils/formValidator";

export const CreatePage = () => {
	const dispatch = useDispatch();
	const { isLoading, auxCountriesToMap } = useSelector(
		(state) => state.countries
	);

	const seasonsSet = new Set();
	auxCountriesToMap?.forEach((obj) => {
		if (obj.Activities && obj.Activities.length > 0) {
			obj.Activities.forEach((activity) => {
				seasonsSet.add(activity.season);
			});
		}
	});
	const seasons = Array.from(seasonsSet);
	//!------------------------------------------------------------------
	const [create, setCreate] = useState({
		name: "",
		season: "",
		difficulty: 1,
		duration: "",
	});
	const [selected, setSelected] = useState([]);

	const onInputChange = (e) => {
		setCreate({
			...create,
			[e.target.name]: e.target.value,
		});
	};

	const handleInputChange = (e) => {
		!selected.includes(e.target.value)
			? setSelected([...selected, e.target.value])
			: setSelected(selected.filter((val) => val !== e.target.value));
	};

	const { name, season, duration } = create;

	const handleSubmit = (e) => {
		e.preventDefault();
		const nameError = validatorName(name);
		if (nameError) {
			alert(nameError);
			return;
		}
		const seasonError = validatorSeason(season);
		if (seasonError) {
			alert(seasonError);
			return;
		}
		const durationError = validatorDuration(duration);
		if (durationError) {
			alert(durationError);
			return;
		}
		const countriesError = validatorCountries(selected);
		if (countriesError) {
			alert(countriesError);
			return;
		}

		dispatch(createActivity(selected, create));
	};

	//!------------------------------------------------------------------

	return (
		<form onSubmit={handleSubmit} className={style.container}>
			{isLoading ? (
				<h1>Cargando</h1>
			) : (
				<>
					<div className={style.subcontainer}>
						<div className={style.intern}>
							<div className={style.inputContainer}>
								<label htmlFor="name">Name</label>
								<input
									id="name"
									type="text"
									name="name"
									onChange={onInputChange}
								/>
							</div>
							<div className={style.inputContainer}>
								<div>
									<label htmlFor="difficult">Difficulty: </label>
									<strong>{create.difficulty}</strong>
								</div>
								<input
									id="difficult"
									name="difficulty"
									value={create.difficulty}
									onChange={onInputChange}
									type="range"
									min="1"
									max="5"
								/>
							</div>
						</div>
						<div className={style.intern}>
							<div className={style.inputContainer}>
								<label htmlFor="duration">Duration (months)</label>
								<input
									id="duration"
									name="duration"
									type="number"
									min="1"
									max="12"
									onChange={onInputChange}
								/>
							</div>
							<div className={style.inputContainer}>
								<label htmlFor="season">Season</label>
								<select
									name="season"
									id="season"
									onChange={onInputChange}
									value={create.season}
								>
									<option defaultValue>Select</option>
									{seasons?.map((season) => (
										<option key={season} value={season}>
											{season}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
					<div>
						<label htmlFor="countries">Select countries</label>
						<div className={style.list}>
							{auxCountriesToMap.map((country) => (
								<div key={country.id}>
									<input
										id="countries"
										name="country"
										type="checkbox"
										value={country.id}
										onChange={handleInputChange}
									/>
									<label>{country.name}</label>
								</div>
							))}
						</div>
					</div>
					<button type="submit">Submit</button>
				</>
			)}
		</form>
	);
};
