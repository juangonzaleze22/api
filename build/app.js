import express from 'express';
import morgan from 'morgan';
import produtctsRoute from './routes/products';
import authRoute from './routes/authentication';
import UsersRoute from './routes/user';
import database from './database';
import cors from 'cors';
import { createRoles } from './libs/initialSetup';
const app = express();
createRoles();
/* Middleware */

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    text: 'welcome'
  });
});
app.use('/api/products', produtctsRoute);
app.use('/api/auth', authRoute);
app.use('/api/users', UsersRoute);
export default app;