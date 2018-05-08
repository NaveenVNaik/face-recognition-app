import React from 'react';
import './Logo.css';
import face from './logo.png';
import Tilt from 'react-tilt';

const Logo = () => {
	return (
		<Tilt className="Tilt shadow-5" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
			<div className="Tilt-inner">
				<img alt='face recognition logo' src={face} />
			</div>
		</Tilt>
	);
}

export default Logo;