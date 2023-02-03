import './resultBox.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ResultBox = () => {
	const [luckyresult, setLuckyresult] = useState('');
	localStorage.setItem('LuckyResult', luckyresult.split('\\n').join(' '));

	const getResult = async () => {
		await axios.get('/api/result').then((res) => {
			setLuckyresult(res.data[0].sentence);
		});
	};

	useEffect(() => {
		getResult();
	}, [setLuckyresult]);

	return (
		<div className="Container">
			<div className="TextBox">
				<div className="Result">
					{(luckyresult || '').split('\\n').map((line, index) => {
						return (
							<span key={index}>
								{line}
								<br />
							</span>
						);
					})}
				</div>
				<a href="http://localhost:3000/result">
					<button className="ResetButton">
						<div className="Reset">다른 쿠키 열어보기</div>
					</button>
				</a>
			</div>
		</div>
	);
};

export default ResultBox;
