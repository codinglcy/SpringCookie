import 'dotenv/config';
import { app } from './src/app.js';
import { dbcon } from './src/db/db-connect.js';

const PORT = process.env.PORT || 5000;

app.listen(() => {
	console.log(`정상적으로 서버를 시작하였습니다. http://localhost:${PORT}`);
});

dbcon.connect((err) => {
	if (err) {
		console.log(`db 연결에 실패하였습니다. ${err}`);
	} else {
		console.log(`db 연결에 성공하였습니다.`);
	}
});
