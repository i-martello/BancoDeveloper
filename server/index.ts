import express from 'express'
import authRoutes from './routes/auth.routes'
import { config } from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

config()
import './database'

const app = express();

const port = process.env.PORT || 3000

app.use(cookieParser());
app.use(cors({
  origin: 'http://127.0.0.1:5173',
  credentials: true
}))
app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(port, ()=> console.log("Server funcionando en el puerto", port))


