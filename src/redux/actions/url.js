import {
	CHANGE_SORT_FIELD_AND_SORT_DIRECTION,
	CHANGE_PAGE_NUMBER,
} from '../constants';

export const changeSortFieldAndSortDirection = sortSettings => ({
	type: CHANGE_SORT_FIELD_AND_SORT_DIRECTION,
	payload: sortSettings,
});

export const changePageNumber = pageNumber => ({
	type: CHANGE_PAGE_NUMBER,
	payload: pageNumber,
});
