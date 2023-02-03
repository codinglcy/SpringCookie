import './cookie.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Cookie = () => {
	const [luckyword, setLuckyword] = useState('');

	useEffect(() => {
		axios.get('/api/word').then((res) => {
			setLuckyword(res.data[0]);
		});
	}, [setLuckyword]);

	return (
		<div className="Container">
			<a href="http://localhost:3000/result" className="CookieATag">
				<img
					className="CookieImg"
					src="../fortune-cookie-emoji-clipart-lg.png"
					alt="포춘쿠키이미지"
				/>
			</a>
			<div className="LuckyWord">
				<a href="http://localhost:3000/result" className="CookieATag">
					<p className="Kor">"{luckyword.kor}"</p>
					<p className="Eng">{luckyword.eng}</p>
					<p className="Mean">
						{(luckyword.mean || '').split('\\n').map((line, index) => {
							return (
								<span key={index}>
									{line}
									<br />
								</span>
							);
						})}
					</p>
				</a>
			</div>
		</div>
	);
};

export default Cookie;
