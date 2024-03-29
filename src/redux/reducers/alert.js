import { SET_ALERT, REMOVE_ALERT } from '../constants';

const initialState = [];

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_ALERT:
			return [payload, ...state];
		case REMOVE_ALERT:
			return [...state].filter(alert => alert.id !== payload);
		default:
			return state;
	}
};
