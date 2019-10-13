import React from 'react';

import './custom-button.scss';

const CustomButton = ({ children, isActive, ...otherProps }) => {
	return (
		<button
			className={`custom-button ${isActive ? 'custom-button-active' : ''}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
