import './App.css';
import MainPage from './page/Main';
import ResultPage from './page/Result';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<header className="App-header">
				<div className="App-title">
					<a href="http://localhost:3000/" className="TitleAtag">
						for<span className="apptitle">春</span>쿠키
					</a>
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
