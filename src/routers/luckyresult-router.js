import { Router } from 'express';
import { dbcon } from '../db-connect.js';

const luckyResultRouter = Router();

luckyResultRouter.get('/', async (req, res, next) => {
	try {
		dbcon.query(
			'select count(*) as count from result',
			(err, sentenceCount) => {
				const randomNum =
					1 + Math.floor(Math.random() * sentenceCount[0].count);
				const findRandomQuery = `select * from result where id=${randomNum}`;
				dbcon.query(findRandomQuery, (err, randomResult) => {
					res.status(201).json(randomResult);
				});
			},
		);
	} catch (err) {
		next(err);
	}
});

export { luckyResultRouter };
