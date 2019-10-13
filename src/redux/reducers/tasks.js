import {
	GET_TASKS_START,
	GET_TASKS_SUCCESS,
	GET_TASKS_FAILURE,
	ADD_TASK_FAILURE,
	EDIT_TASK_FAILURE,
} from '../constants';

const INITIAL_STATE = {
	tasksCollection: [],
	totalTaskCount: 0,
	loading: false,
	errorMessage: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case GET_TASKS_START:
			return {
				...state,
				loading: true,
			};
		case GET_TASKS_SUCCESS:
			return {
				...state,
				loading: false,
				tasksCollection: payload.tasks,
				totalTaskCount: payload.total_task_count,
			};
		case ADD_TASK_FAILURE:
		case GET_TASKS_FAILURE:
		case EDIT_TASK_FAILURE:
			return {
				...state,
				loading: false,
				errorMessage: payload,
			};
		default:
			return state;
	}
};
