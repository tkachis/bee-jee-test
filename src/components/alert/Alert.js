import React from 'react';

import { connect } from 'react-redux';

import './alert.scss';

const Alert = ({ alerts }) => (
	<div className="alert-wrapper">
		{alerts !== null &&
			alerts.length > 0 &&
			alerts.map(alert => (
				<div
					key={alert.id}
					className={`alert-item ${
						alert.alertType ? `alert-item-${alert.alertType}` : ''
					}`}
				>
					{alert.msg}
				</div>
			))}
	</div>
);

const mapStateToProps = state => ({
	alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
