import './share.css';
// import axios from 'axios';

const ShareBox = () => {
	return (
		<div className="Container">
			<div className="ShareBox">
				<button className="KakaoShare"></button>
				<button className="TwitterShare"></button>
				<button className="LinkCopy"></button>
			</div>
		</div>
	);
};

export default ShareBox;
