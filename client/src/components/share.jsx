import './share.css';

const ShareBox = () => {
	const createKakaoButton = () => {
		if (window.Kakao) {
			const kakao = window.Kakao;

			if (!kakao.isInitialized()) {
				kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
			}

			kakao.Share.sendDefault({
				objectType: 'text',
				text: localStorage.getItem('LuckyResult'),
				link: {
					mobileWebUrl: 'http://localhost:3000',
					webUrl: 'http://localhost:3000',
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
				<button className="TwitterShare"></button>
				<button className="LinkCopy"></button>
			</div>
		</div>
	);
};

export default ShareBox;
