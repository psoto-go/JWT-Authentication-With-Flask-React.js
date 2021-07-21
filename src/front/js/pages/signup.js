import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Signup = () => {
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
						<h1 className="text-center p-2">Sign Up</h1>
						<form>
							<div className="form-group row">
								<label className="col-sm-2 col-form-label">Name</label>
								<div className="col-sm-10">
									<input type="text" className="form-control" />
								</div>
							</div>
							<div className="form-group row">
								<label className="col-sm-2 col-form-label">Last Name</label>
								<div className="col-sm-10">
									<input type="text" className="form-control" />
								</div>
							</div>
							<div className="form-group row">
								<label className="col-sm-2 col-form-label">Email</label>
								<div className="col-sm-10">
									<input type="email" className="form-control" id="inputEmail4" />
								</div>
							</div>
							<div className="form-group row">
								<label className="col-sm-2 col-form-label">Password</label>
								<div className="col-sm-10">
									<input type="password" className="form-control" id="inputPassword" />
								</div>
							</div>
							<div className="form-group row">
								<label className="col-sm-2 col-form-label">City</label>
								<div className="col-sm-10">
									<input type="text" className="form-control" />
								</div>
							</div>
							<div className="form-group row">
								<label className="col-sm-2 col-form-label">Phone Number</label>
								<div className="col-sm-10">
									<input type="text" className="form-control" />
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
