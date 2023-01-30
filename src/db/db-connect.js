import 'dotenv/config';
import mysql from 'mysql2';

const dbcon = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: process.env.MYSQL_ROOT_PASSWORD,
	database: 'springcookie',
});

export { dbcon };
