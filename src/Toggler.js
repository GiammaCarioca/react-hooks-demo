import React, { useState } from 'react';

function Toggler() {
	const [isHappy, setIsHappy] = useState(true);
	const [isHeartbroken, setIsHeartbroken] = useState(false);
	const toogleIsHappy = () => {
		setIsHappy(!isHappy);
	};
	const toogleIsHeartbroken = () => {
		setIsHeartbroken(!isHeartbroken);
	};
	return (
		<div>
			<h1 onClick={toogleIsHappy}>{isHappy ? '😄' : '😢'}</h1>
			<h1 onClick={toogleIsHeartbroken}>{isHeartbroken ? '💔' : '❤️'}</h1>
		</div>
	);
}

export default Toggler;
