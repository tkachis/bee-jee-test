import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addNewTask } from '../../redux/actions/tasks';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import './create-task.scss';

const CreateTask = ({ addNewTask }) => {
	const [taskData, setTaskData] = useState({
		username: '',
		email: '',
		text: '',
	});

	const { username, email, text } = taskData;

	const handleChange = ({ target: { name, value } }) => {
		setTaskData({ ...taskData, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		const form = new FormData();
		form.append('username', username);
		form.append('email', email);
		form.append('text', text);

		addNewTask(form);

		setTaskData({
			username: '',
			email: '',
			text: '',
		});
	};

	return (
		<form className="create-task" onSubmit={handleSubmit}>
			<FormInput
				type="text"
				placeholder="username"
				name="username"
				value={username}
				onChange={handleChange}
				required
			/>
			<FormInput
				type="email"
				placeholder="email"
				name="email"
				value={email}
				onChange={handleChange}
				required
			/>
			<FormInput
				type="text"
				placeholder="text"
				name="text"
				value={text}
				onChange={handleChange}
				required
			/>

			<CustomButton type="submit">Добавить</CustomButton>
		</form>
	);
};

export default connect(
	null,
	{ addNewTask }
)(CreateTask);
