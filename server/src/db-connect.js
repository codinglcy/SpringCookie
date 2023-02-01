import 'dotenv/config';
import mysql from 'mysql2';

const dbcon = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
});

dbcon.connect((err) => {
	if (err) {
		console.log(`db 연결에 실패하였습니다. ${err}`);
	} else {
		console.log(`db 연결에 성공하였습니다.`);
	}
});

export { dbcon };
