import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/users.Routes';
import 'reflect-metadata'
import { SessionRoutes } from './routes/session.Routes';
import { ContactRoutes } from './routes/contacts.routes';

const app = express();

app.use(express.json());

app.use(cors())


app.use('/users', userRoutes)
app.use('/contact', ContactRoutes)
app.use('/login', SessionRoutes)

export default app