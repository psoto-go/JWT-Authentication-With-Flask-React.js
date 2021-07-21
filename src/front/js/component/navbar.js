import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const out = e => {
		e.preventDefault();
		actions.logOut();
		history.push("/");
	};
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						className="logo2"
						src="https://uploads.convertflow.co/production/websites/9849/8uSlRHnaTm6nHOBiBNxU_6FXhIqn9QMS7umwEj84p_4G_LOGO_NEGRO-01.png"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/signup">
					<button className="btn btn-primary m-1">Sign Up</button>
				</Link>
				<Link to="/login">
					<button className="btn btn-primary m-1">Login</button>
				</Link>
				<button className="btn btn-primary" type="submit" onClick={out}>
					Logout
				</button>
			</div>
		</nav>
	);
};
