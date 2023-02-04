import './share.css';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ShareBox = () => {
	const SpringCookieUrl = 'http://localhost:3000/';
	const [result, setResult] = useState('');

	useEffect(() => {
		setTimeout(() => {
			setResult(localStorage.getItem('LuckyResult'));
		}, 300);
	});

	const createKakaoButton = () => {
		if (window.Kakao) {
			const kakao = window.Kakao;

			if (!kakao.isInitialized()) {
				kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
			}

			kakao.Share.sendDefault({
				objectType: 'text',
				text: result,
				link: {
					mobileWebUrl: SpringCookieUrl,
					webUrl: SpringCookieUrl,
				},
			});
		}
	};

	return (
		<div className="Container">
			<div className="ShareBox">
				<div className="KakaoShare">
					<button
						id="kakao-link-btn"
						onClick={() => {
							createKakaoButton();
						}}
					>
						<img
							src="../kakao-logo.png"
							alt="kakao-share-icon"
							className="Logo"
						/>
					</button>
				</div>

				<div className="TwitterShare">
					<TwitterShareButton url={SpringCookieUrl} title={result}>
						<TwitterIcon
							className="TwitterShareIcon"
							size={37}
							borderRadius={10}
						></TwitterIcon>
					</TwitterShareButton>
				</div>

				<div className="LinkCopy">
					<CopyToClipboard text={SpringCookieUrl}>
						<button className="urlBtn">URL</button>
					</CopyToClipboard>
				</div>
			</div>
		</div>
	);
};

export default ShareBox;
