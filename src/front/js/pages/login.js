import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { api_url } from "../constants";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [loginValue, setLoginValue] = useState(firstValue);

	const firstValue = {
		email: "",
		password: ""
	};

	const changeInput = e => {
		setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
	};

	const submitForm = e => {
		e.preventDefault();

		actions.signin_user(loginValue);
	};

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
						<h1 className="text-center p-2">Login</h1>
						<form onSubmit={submitForm}>
							<div className="form-group row">
								<label className="col-sm-2 col-form-label">Email</label>
								<div className="col-sm-10">
									<input
										type="email"
										className="form-control"
										id="inputEmail4"
										name="email"
										onChange={changeInput}
									/>
								</div>
							</div>
							<div className="form-group row">
								<label className="col-sm-2 col-form-label">Password</label>
								<div className="col-sm-10">
									<input
										type="password"
										className="form-control"
										id="inputPassword"
										name="password"
										onChange={changeInput}
									/>
								</div>
							</div>

							<button className="btn btn-primary" type="submit">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
