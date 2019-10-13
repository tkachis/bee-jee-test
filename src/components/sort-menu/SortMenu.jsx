import React, { useState } from 'react';
import { connect } from 'react-redux';

import { changeSortFieldAndSortDirection } from '../../redux/actions/url';

import RadioButton from '../radio-button/RadioButton';
import CustomButton from '../custom-button/CustomButton';

import './sort-menu.scss';

const SortMenu = ({ changeSortFieldAndSortDirection }) => {
	const [sortData, setSortData] = useState({
		sortField: 'id',
		sortDirection: 'desc',
	});

	const { sortField, sortDirection } = sortData;

	const handleChange = ({ target: { name, value } }) => {
		setSortData({ ...sortData, [name]: value });
	};

	const handleClick = () => {
		changeSortFieldAndSortDirection({ sortField, sortDirection });
	};

	return (
		<div className="sort-menu">
			<p>Сортировка по типу</p>
			<div className="radio-group">
				<RadioButton
					textlabel="ID"
					name="sortField"
					onChange={handleChange}
					value="id"
				/>
				<RadioButton
					textlabel="Имени пользователя"
					name="sortField"
					onChange={handleChange}
					value="username"
				/>
				<RadioButton
					textlabel="Статусу"
					name="sortField"
					onChange={handleChange}
					value="status"
				/>
				<RadioButton
					textlabel="Email"
					name="sortField"
					onChange={handleChange}
					value="email"
				/>
			</div>

			<p>Сортировка по направлению</p>
			<div className="radio-group">
				<RadioButton
					textlabel="По возрастанию (ASC)"
					name="sortDirection"
					onChange={handleChange}
					value="asc"
				/>
				<RadioButton
					textlabel="В порядке убывания (DESC)"
					name="sortDirection"
					onChange={handleChange}
					value="desc"
				/>
			</div>
			<CustomButton onClick={handleClick}>Применить фильтр</CustomButton>
		</div>
	);
};

export default connect(
	null,
	{ changeSortFieldAndSortDirection }
)(SortMenu);
