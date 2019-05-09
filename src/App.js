import React from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toogler from './Toggler';
import './App.css';

function App() {
	return (
		<div className="App">
			<CounterClass />
			<CounterHooks />
			<Toogler />
		</div>
	);
}

export default App;
