import {
	CHANGE_SORT_FIELD_AND_SORT_DIRECTION,
	CHANGE_PAGE_NUMBER,
} from '../constants';

const INITIAL_STATE = {
	sortField: 'id',
	sortDirection: 'desc',
	pageNumber: 1,
};

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case CHANGE_SORT_FIELD_AND_SORT_DIRECTION:
			return {
				...state,
				sortField: payload.sortField,
				sortDirection: payload.sortDirection,
			};
		case CHANGE_PAGE_NUMBER:
			return {
				...state,
				pageNumber: payload,
			};
		default:
			return state;
	}
};
