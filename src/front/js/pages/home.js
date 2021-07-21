import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img
						className="logo"
						src="https://uploads.convertflow.co/production/websites/9849/8uSlRHnaTm6nHOBiBNxU_6FXhIqn9QMS7umwEj84p_4G_LOGO_NEGRO-01.png"
					/>
				</div>
				<div className="col">
					<div className="container pt-5">
						<Link to="/signup">
							<button type="button" className="btn btn-primary btn-lg btn-block m-2">
								Sign Up
							</button>
						</Link>
						<Link to="/login">
							<button type="button" className="btn btn-secondary btn-lg btn-block m-2">
								Login
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
