import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const redirect = useNavigate()

	let token = sessionStorage.getItem("token")
	console.log(token)

	const handleClick = () => {
		actions.login(email, password)
		.then(() => {
			if (store.token && store.token != "" && store.token != undefined && store.token != "undefined") {
				redirect("/private")
			}
			else {
				alert("Email or password invalid. Try again")
				redirect("/login")
			}
		})
	}

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			{(store.token && store.token != "" && store.token != undefined && store.token != "undefined") ? "This is your token " + store.token :
			<div className="forms">
				<input type="text" placeholder="Email" value={email} onChange={(ev) => setEmail(ev.target.value)}/>
				<input type="password" placeholder="Password" value={password} onChange={(ev) => setPassword(ev.target.value)}/>
				<button className="btns" onClick={handleClick}>Login</button>
			</div>
			}
			
		</div>
	);
};
