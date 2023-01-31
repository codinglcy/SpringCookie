import { Router } from 'express';
import { dbcon } from '../db-connect.js';

const wordRouter = Router();

wordRouter.get('/', async (req, res, next) => {
	try {
		dbcon.query('select count(*) as count from word', (err, wordCount) => {
			const randomNum = 1 + Math.floor(Math.random() * wordCount[0].count);
			const findRandomQuery = `select * from word where id=${randomNum}`;
			dbcon.query(findRandomQuery, (err, randomResult) => {
				res.status(201).json(randomResult);
			});
		});
	} catch (err) {
		next(err);
	}
});

export { wordRouter };
