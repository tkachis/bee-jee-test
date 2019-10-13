import axios from 'axios';

import { setAlert } from './alert';
import ValidationError from '../utils/validationError';

import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	CHECK_AUTH_TOKEN,
} from '../constants';

export const getToken = userCredentials => async dispatch => {
	try {
		dispatch({
			type: LOGIN_START,
		});

		const res = await axios.post(
			'https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=Igor',
			userCredentials
		);

		if (res.data.status === 'error') {
			throw new ValidationError('Неверный логин или пароль');
		}

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data.message.token,
		});
	} catch (err) {
		if (err instanceof ValidationError) {
			dispatch(setAlert(err.message, 'danger'));
		}

		dispatch({
			type: LOGIN_FAILURE,
			payload: err,
		});
	}
};

export const logout = () => ({ type: LOGOUT });

export const checkAuthToken = () => dispatch => {
	try {
		if (localStorage.getItem('token')) {
			dispatch({
				type: CHECK_AUTH_TOKEN,
			});
		}
	} catch (err) {
		dispatch({
			type: LOGIN_FAILURE,
			payload: err,
		});
	}
};
