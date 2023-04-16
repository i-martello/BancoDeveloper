import express from 'express'
import authRoutes from './routes/auth.routes'
import { config } from 'dotenv'

const app = express();

const port = process.env.PORT || 3000

app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(port, ()=> console.log("Server funcionando en el puerto", port))


