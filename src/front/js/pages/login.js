import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	let token = sessionStorage.getItem("token")
	console.log(token)

	const handleClick = () => {
		fetch("https://3001-4geeksacade-reactflaskh-k2lys8psix6.ws-eu84.gitpod.io/api/login", {
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
		.then(data => {
			console.log(data)
			sessionStorage.setItem("token", data.access_token)
		
		})
		.catch(error => {"There was an error: ", error})
	}

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			{(token && token != "" && token != undefined && token != "undefined") ? "This is your token " + token :
			<div>
				<input type="text" placeholder="Email" value={email} onChange={(ev) => setEmail(ev.target.value)}/>
				<input type="password" placeholder="Password" value={password} onChange={(ev) => setPassword(ev.target.value)}/>
				<button onClick={handleClick}>Login</button>
			</div>
			}
			
		</div>
	);
};
