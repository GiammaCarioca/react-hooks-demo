import React, { useState } from 'react';

function Toggler() {
	const [isHappy, setIsHappy] = useState(true);
	const toogle = () => {
		setIsHappy(!isHappy);
	};
	return (
		<div>
			<h1 onClick={toogle}>{isHappy ? '😄' : '😢'}</h1>
		</div>
	);
}

export default Toggler;
