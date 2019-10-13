import React from 'react';

import './radio-button.scss';

const RadioButton = ({ textlabel = 'text', ...otherProps }) => (
	<span className="radio-button">
		<input type="radio" className="input" id="radio-input" {...otherProps} />
		<label className="label" htmlFor="radio-input">
			{textlabel}
		</label>
	</span>
);

export default RadioButton;
