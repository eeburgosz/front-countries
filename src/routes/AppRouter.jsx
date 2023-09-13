import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './../views/Landing/LandingPage';
import { ViewRouter } from "./ViewRouter";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/*" exact element={<ViewRouter />} />
      </Routes>
    </div>
  )
}
