const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: "",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			token: ""
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			login: async (email, password) => {
				try{
					const response = await fetch("https://3001-4geeksacade-reactflaskh-k2lys8psix6.ws-eu84.gitpod.io/api/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"email": email,
						"password": password
					})
				})
				const data = await response.json()
				console.log(data)
				sessionStorage.setItem("token", data.access_token)
				setStore({token: data.access_token})
				return true
				}
				catch(error){
					console.error("There has been some issue logging in")
				}
				
			},

			refreshed: () => {
				const token = sessionStorage.getItem("token");
				if (token && token != "" && token != undefined && token != "undefined") {
					setStore({token: token})
				}
			},

			logout: () => {
				sessionStorage.removeItem("token")
				setStore({token: ""})
			},

			accessPrivate: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch("https://3001-4geeksacade-reactflaskh-k2lys8psix6.ws-eu84.gitpod.io/api/private", {
						headers: {
							Authorization: "Bearer " + store.token
						}
					})
					const data = await resp.json()
					console.log(data)
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
