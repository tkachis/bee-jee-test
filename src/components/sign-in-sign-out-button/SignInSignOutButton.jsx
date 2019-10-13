import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions/login';

import CustomButton from '../custom-button/CustomButton';

import './sign-in-sign-out-button.scss';

const SignInButton = ({ history, logout, isAuthenticated }) => {
	return (
		<div className="sign-in-button">
			{isAuthenticated ? (
				<CustomButton onClick={logout}>Выйти</CustomButton>
			) : (
				<CustomButton onClick={() => history.push(`/sign-in`)}>
					Войти
				</CustomButton>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.login.isAuthenticated,
});

export default connect(
	mapStateToProps,
	{ logout }
)(SignInButton);
