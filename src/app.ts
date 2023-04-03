import express from 'express';
import { userRoutes } from './routes/users.Routes';
import 'reflect-metadata'
import { ContactRoutes } from './routes/contacts.Routes';
import { SessionRoutes } from './routes/session.Routes';

const app = express();

app.use(express.json());
app.use('/users', userRoutes)
app.use('/contact', ContactRoutes)
app.use('/login', SessionRoutes)

export default app