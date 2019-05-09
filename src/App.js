import React from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toogler from './Toggler';
import SimpleFormClass from './SimpleFormClass';
import SimpleFormHooks from './SimpleFormHooks';
import './App.css';

function App() {
	return (
		<div className="App">
			<CounterClass />
			<CounterHooks />
			<Toogler />
			<SimpleFormClass />
			<SimpleFormHooks />
		</div>
	);
}

export default App;
