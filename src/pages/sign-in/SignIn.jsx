import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getToken } from '../../redux/actions/login';

import FormInput from '../../components/form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';

import './sign-in.scss';

const SignIn = ({ history, isAuthenticated, getToken }) => {
	const [userCredentials, setUserCredentials] = useState({
		username: '',
		password: '',
	});

	const { username, password } = userCredentials;

	if (isAuthenticated) {
		return <Redirect to="/" />;
	}

	const handleChange = ({ target: { name, value } }) => {
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		const form = new FormData();
		form.append('username', username);
		form.append('password', password);

		getToken(form);

		setUserCredentials({ username: '', password: '' });
	};

	return (
		<div className="sign-in">
			<h1>Sign In</h1>
			<form className="form" onSubmit={handleSubmit}>
				<FormInput
					name="username"
					type="text"
					onChange={handleChange}
					value={username}
					placeholder="username"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					onChange={handleChange}
					placeholder="password"
					required
				/>
				<div className="btn-container">
					<CustomButton onClick={() => history.push(`/`)}>Назад</CustomButton>
					<CustomButton type="submit">Войти</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.login.isAuthenticated,
});

export default connect(
	mapStateToProps,
	{ getToken }
)(SignIn);
