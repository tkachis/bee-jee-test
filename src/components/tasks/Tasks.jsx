import React from 'react';
import { connect } from 'react-redux';

import TaskItem from '../task-item/TaskItem';

import './tasks.scss';

const Tasks = ({ tasksCollection }) => {
	return (
		<div className="tasks">
			{tasksCollection.map(item => (
				<TaskItem key={item.id} {...item} />
			))}
		</div>
	);
};

const mapStateToProps = state => ({
	tasksCollection: state.tasks.tasksCollection,
});

export default connect(mapStateToProps)(Tasks);
