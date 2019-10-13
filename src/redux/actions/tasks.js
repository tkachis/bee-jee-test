import axios from 'axios';

import ValidationError from '../utils/validationError';
import { setAlert } from './alert';
import { logout } from './login';

import {
	GET_TASKS_START,
	GET_TASKS_SUCCESS,
	GET_TASKS_FAILURE,
	ADD_TASK_FAILURE,
	EDIT_TASK_FAILURE,
} from '../constants';

export const getTasks = () => async (dispatch, getState) => {
	const state = getState();
	const { pageNumber, sortField, sortDirection } = state.url;

	try {
		dispatch({
			type: GET_TASKS_START,
		});

		const res = await axios.get(
			`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Igor&sort_field=${sortField}&sort_direction=${sortDirection}&page=${pageNumber}`
		);

		dispatch({
			type: GET_TASKS_SUCCESS,
			payload: res.data.message,
		});
	} catch (err) {
		dispatch({
			type: GET_TASKS_FAILURE,
			payload: err,
		});
	}
};

export const addNewTask = newTask => async dispatch => {
	try {
		let res = await axios.post(
			'https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=Igor',
			newTask
		);

		if (res.data.status === 'error') {
			throw new ValidationError(
				'Поля username, email, text - являются обязательными для заполнения'
			);
		}

		dispatch(setAlert('Новая задача успешно добавлена!', 'success'));

		dispatch(getTasks());
	} catch (err) {
		if (err instanceof ValidationError) {
			dispatch(setAlert(err.message, 'danger'));
		}

		dispatch({
			type: ADD_TASK_FAILURE,
			payload: err,
		});
	}
};

export const editTask = (id, dataToChangeTask) => async dispatch => {
	try {
		if (!localStorage.getItem('token')) {
			dispatch(setAlert('Вы не авторизованы!', 'danger'));

			dispatch(logout());
		} else {
			axios.post(
				`https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${id}/?developer=Igor`,
				dataToChangeTask
			);

			dispatch(setAlert('Задача успешно изменена!', 'success'));

			dispatch(getTasks());
		}
	} catch (err) {
		dispatch({
			type: EDIT_TASK_FAILURE,
			payload: err,
		});
	}
};
