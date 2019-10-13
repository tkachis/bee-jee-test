import React from 'react';
import { connect } from 'react-redux';

import { changePageNumber } from '../../redux/actions/url';

import CustomButton from '../custom-button/CustomButton';

import './pagination.scss';

const Pagination = ({
	totalTaskCount,
	changePageNumber,
	currentPageNumber,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalTaskCount / 3); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className="pagination">
			<ul>
				{pageNumbers.map(number => (
					<li key={number} className="page-item">
						<CustomButton
							isActive={number === currentPageNumber}
							onClick={() => changePageNumber(number)}
						>
							{number}
						</CustomButton>
					</li>
				))}
			</ul>
		</nav>
	);
};

const mapStateToProps = state => ({
	totalTaskCount: state.tasks.totalTaskCount,
	currentPageNumber: state.url.pageNumber,
});

export default connect(
	mapStateToProps,
	{ changePageNumber }
)(Pagination);
