import cors from 'cors';
import express from 'express';
import { errorHandler } from './middlewares/index.js';
import { wordRouter, luckyResultRouter } from './routers/index.js';

const app = express();
app.use(cors());

// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());
// Content-Type: application/x-www-form-urlencoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.urlencoded({ extended: false }));

//api라우팅
app.use('/api', (req, res) => {
	res.status(201).json({ data: 'Hello World' });
});
app.use('/api/word', wordRouter);
app.use('/api/result', luckyResultRouter);

app.use(errorHandler);

export { app };
