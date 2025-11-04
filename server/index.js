import express from 'express';
import cors from 'cors';
import { connectDb } from './db/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
    credentials : true,
    methods : ['GET', 'POST', 'PUT', 'DELETE'],
    origin : 'http://localhost:5173'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

import userRouter from './routes/user.routes.js';
import { auth } from './utils/better-auth.js';

app.use('/api/auth', auth.handler);
app.use((req, res, next) => {
    res.removeHeader("Content-Security-Policy");
    next();
});
app.use('/api/users', userRouter);


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDb();
