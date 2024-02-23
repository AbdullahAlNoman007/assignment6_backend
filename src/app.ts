import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import notFound from './middleware/notFound';
import globalErrorHandle from './middleware/globalErrorHandle';
import router from './router';

const app: Application = express();
const allowedOrigins = ['http://localhost:5173', 'https://fullstack-2-8255d.web.app', 'https://fullstack-2-8255d.firebaseapp.com'];

app.use(express.json());
app.use(cors({ origin: "https://fullstack-2-8255d.web.app", credentials: true }));

app.use('/api', router)

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to Fullstack's Assignment 2 | Redux-2 ");
});

app.use(globalErrorHandle)
app.use(notFound)


export default app;
