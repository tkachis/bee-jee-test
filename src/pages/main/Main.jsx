import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getTasks } from '../../redux/actions/tasks';

import CreateTask from '../../components/create-task/CreateTask';
import SortMenu from '../../components/sort-menu/SortMenu';
import Tasks from '../../components/tasks/Tasks';
import SignInSignOutButton from '../../components/sign-in-sign-out-button/SignInSignOutButton';
import Pagination from '../../components/pagination/Pagination';

import './main.scss';

const Main = ({ history, getTasks, pageNumber, sortField, sortDirection }) => {
	useEffect(() => {
		getTasks();
	}, [getTasks, pageNumber, sortField, sortDirection]);

	return (
		<div className="Main">
			<SignInSignOutButton history={history} />
			<h1>TODOs</h1>
			<CreateTask />
			<SortMenu />
			<Tasks />
			<Pagination />
		</div>
	);
};

const mapStateToProps = ({ url }) => ({
	pageNumber: url.pageNumber,
	sortField: url.sortField,
	sortDirection: url.sortDirection,
});

export default connect(
	mapStateToProps,
	{ getTasks }
)(Main);
