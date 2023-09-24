import React, { useEffect } from 'react';
import style from './DetailPage.module.css';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById } from "../../redux-toolkit/thunks";

export const DetailPage = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  const { countryById, isLoading } = useSelector(state => state.countries);

  return (
    <div className={style.container}>
      {isLoading ? (<h1>Cargando</h1>)
        :
        (
          <>
            <button onClick={() => window.history.back()}>Go back</button>
            <div className={style.subcontainer}>
              <div className={style.flagSubcontainer}>
                <h1>{countryById.name}</h1>
                <div className={style.flagId}>
                  <img src={countryById.flag} alt="Flag" />
                  <div>
                    <span>{countryById.id}</span>
                  </div>
                </div>
                <h3>{(countryById.capital)?.replace(/[^a-zA-Z]/g, '').replace(/([A-Z])/g, ' $1').trim()}</h3>
              </div>

              <div className={style.infoSubcontainer}>
                <h4>Continent: {countryById.continent}</h4>
                <h4>Subregion: {countryById.subregion}</h4>
                <h4>Area: {(countryById.area)?.toLocaleString()} km<sup>2</sup></h4>
                <h4>Population: {(countryById.population)?.toLocaleString()}</h4>
              </div>
            </div>
            <div className={style.activitySubcontainer}>
              {countryById.Activities?.length === 0 ? (<h2>No activities</h2>)
                :
                (
                  <table border="1">
                    <thead>
                      <tr>
                        <th>Activity</th>
                        <th>Season</th>
                        <th>Difficulty</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        countryById.Activities?.map(activity => (
                          <tr key={activity.id}>
                            <td>{activity.activityName}</td>
                            <td>{activity.season}</td>
                            <td>{activity.difficulty}</td>
                            <td>{activity.duration} months</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                )
              }
            </div>
          </>
        )
      }
    </div>
  );
};