import express from 'express';
import { userRoutes } from './routes/users.Routes';
import 'reflect-metadata'
import { ContactRoutes } from './routes/contacts.routes';

const app = express();

app.use(express.json());
app.use('/users', userRoutes)
app.use('/contact', ContactRoutes)

export default app