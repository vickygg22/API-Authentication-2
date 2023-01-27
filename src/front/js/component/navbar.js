import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const redirect = useNavigate()
	const handleLogout = () => {
		actions.logout()
		redirect("/")
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/signup">
						<button className="btn btn-primary">Signup</button>
					</Link>
					{!store.token ? 
					<Link to="/login">
						<button className="btn btn-primary loginButton">Login</button>
					</Link>
					:
						<button onClick={handleLogout} className="btn btn-primary loginButton">Logout</button>
					}
					
				</div>
			</div>
		</nav>
	);
};
