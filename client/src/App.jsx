// import { useEffect } from 'react';
// import axios from 'axios';
import './App.css';
import MainPage from './page/Main';
import ResultPage from './page/Result';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<header className="App-header">
				<div className="App-title">
					for<span className="apptitle">春</span>쿠키
				</div>
			</header>

			<Routes>
				<Route path="/" element={<MainPage />}></Route>
				<Route path="/result" element={<ResultPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
