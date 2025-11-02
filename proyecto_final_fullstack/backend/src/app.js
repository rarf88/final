import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use(errorMiddleware);

// salud
app.get('/', (req,res)=> res.json({ ok:true, message:'API OK' }));

export default app;
