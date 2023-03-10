import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const redirectSignup = useNavigate()

	const handleClick = () => {
		fetch("https://3001-4geeksacade-reactflaskh-k2lys8psix6.ws-eu84.gitpod.io/api/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"email": email,
				"password": password
			})
		})
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(error => {"There was an error: ", error})
		redirectSignup("/login")
	}

	return (
		<div className="text-center mt-5">
			<h1>Sign Up</h1>
			<div className="forms">
				<input type="text" placeholder="Email" value={email} onChange={(ev) => setEmail(ev.target.value)}/>
				<input type="password" placeholder="Password" value={password} onChange={(ev) => setPassword(ev.target.value)}/>
				<button className="btns" onClick={handleClick}>Signup</button>
			</div>
		</div>
	);
};
