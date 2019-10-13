import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { checkAuthToken } from './redux/actions/login';

import Main from './pages/main/Main';
import SignIn from './pages/sign-in/SignIn';
import Alert from './components/alert/Alert';

function App({ checkAuthToken }) {
	useEffect(() => {
		checkAuthToken();
	}, [checkAuthToken]);
	return (
		<>
			<Alert />
			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/sign-in" component={SignIn} />
			</Switch>
		</>
	);
}

export default connect(
	null,
	{ checkAuthToken }
)(App);
