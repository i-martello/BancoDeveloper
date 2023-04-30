import express from 'express'
import authRoutes from './routes/auth.routes'
import marketRoutes from './routes/market.routes';
import { config } from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

config()
import './database'

const app = express();

const port = process.env.PORT || 3000

app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/market', marketRoutes);

app.listen(port, ()=> console.log("Server funcionando en el puerto", port))


