import ResultBox from '../components/resultBox';
import ShareBox from '../components/share';
import { useEffect } from 'react';

const ResultPage = () => {
	useEffect(() => {
		const script = document.createElement('script');

		script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	});

	return (
		<>
			<ResultBox />
			<ShareBox />
		</>
	);
};

export default ResultPage;
