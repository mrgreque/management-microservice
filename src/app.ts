import express from 'express';
import { router } from './routes/routes';
import 'express-async-errors';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

export { app };