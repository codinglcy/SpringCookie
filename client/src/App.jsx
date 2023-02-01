import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const getApi = async () => {
		axios.get('/api').then((res) => {
			console.log(res);
		});
	};
	useEffect(() => {
		getApi();
	}, []);
	return (
		<div>안녕하세요</div>
		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
	);
}

export default App;
