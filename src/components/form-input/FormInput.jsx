import React from 'react';

import './form-input.scss';

const FormInput = ({ ...otherProps }) => (
	<input className="form-input" {...otherProps} />
);

export default FormInput;
