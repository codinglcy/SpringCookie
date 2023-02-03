import './resultBox.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ResultBox = () => {
	const [luckyresult, setLuckyresult] = useState('');

	const getResult = () => {
		axios.get('/api/result').then((res) => {
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
				<button
					className="ResetButton"
					onClick={() => {
						getResult();
					}}
				>
					<div className="Reset">다른 쿠키 열어보기</div>
				</button>
			</div>
		</div>
	);
};

export default ResultBox;
