import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { editTask } from '../../redux/actions/tasks';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import './task-item.scss';

class TaskItem extends Component {
	state = {
		newText: this.props.text,
		newStatus: this.props.status,
	};

	redirect = path => this.props.history.push(path);

	createFormAndEditTask = (n, v) => {
		if (!localStorage.getItem('token')) {
			this.redirect('/sign-in');
		}

		const form = new FormData();
		form.append('token', localStorage.getItem('token'));
		form.append(n.toString(), v);

		this.props.editTask(this.props.id, form);
	};

	handleOnChangeCheckbox = () => {
		//
		this.setState(
			prevState => {
				if (prevState.newStatus === 10) return { ...this.state, newStatus: 0 };
				return { ...this.state, newStatus: 10 };
			},
			() => this.createFormAndEditTask('status', this.state.newStatus)
		);
	};

	handleSubmit = e => {
		e.preventDefault();
		this.createFormAndEditTask('text', this.state.newText);
	};

	render() {
		const { username, email, isAuthenticated } = this.props;

		return (
			<div
				className={`task-item ${
					this.state.newStatus === 10 ? 'task-item-completed' : ''
				}`}
			>
				<p className="username">{username}</p>
				<p className="email">{email}</p>
				{isAuthenticated ? (
					<form className="form" onSubmit={this.handleSubmit}>
						<FormInput
							type="text"
							value={this.state.newText}
							onChange={e =>
								this.setState({ ...this.state, newText: e.target.value })
							}
						/>
						<input
							className="checkbox"
							type="checkbox"
							checked={this.state.newStatus === 10}
							onChange={this.handleOnChangeCheckbox}
						/>
						<CustomButton type="submit">Изменить</CustomButton>
					</form>
				) : (
					<p className="text">{this.state.newText}</p>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.login.isAuthenticated,
});

const enhance = compose(
	connect(
		mapStateToProps,
		{ editTask }
	),
	withRouter
);

export default enhance(TaskItem);
