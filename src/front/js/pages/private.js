import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Login } from "./login";

export const Private = () => {
	const { store, actions } = useContext(Context);
	const redirectUnauthorisedUser = useNavigate()
	useEffect(() => {
		if (store.token && store.token != "" && store.token != undefined && store.token != "undefined") {
			actions.accessPrivate()
		}
		else {redirectUnauthorisedUser("/login")}
	}, [store.token])
	return (store.token && store.token != "" && store.token != undefined && store.token != "undefined") ? (
		<div className="text-center mt-5">
			<h1>Hey there!</h1>
			<h3>Welcome to the private section of the webpage! </h3>
			<div className="alert alert-info">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa lacus, mattis ac neque nec, scelerisque malesuada neque. Sed vitae faucibus tellus. Aliquam ut velit semper risus fermentum varius in eget nisl. Quisque tellus risus, finibus id justo sed, mollis rhoncus risus. Pellentesque quam lorem, rhoncus vel porta ut, venenatis.</p>
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		</div>
	) :
	(<Login />);
};
