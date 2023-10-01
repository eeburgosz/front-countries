import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, DetailPage, CreatePage } from "../views";
import { Footer, NavBar } from "../components";

export const ViewRouter = () => {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/countries" exact element={<HomePage />} />
				<Route path="/country/:id" exact element={<DetailPage />} />
				<Route path="/create" exact element={<CreatePage />} />
				<Route path="/*" element={<Navigate to="/countries" />} />
			</Routes>
			<Footer />
		</div>
	);
};
