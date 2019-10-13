import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	CHECK_AUTH_TOKEN,
} from '../constants';

const INITIAL_STATE = {
	token: localStorage.getItem('token'),
	isAuthenticated: false,
	loading: false,
	errorMessage: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case LOGIN_START:
			return {
				...state,
				loading: true,
			};
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload);
			return {
				...state,
				isAuthenticated: true,
				loading: false,
			};
		case LOGIN_FAILURE:
			localStorage.removeItem('token');
			return {
				token: null,
				isAuthenticated: false,
				loading: false,
				errorMessage: payload,
			};
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				token: null,
				isAuthenticated: false,
				loading: false,
			};
		case CHECK_AUTH_TOKEN:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
			};
		default:
			return state;
	}
};
