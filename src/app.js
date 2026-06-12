import express from "express"
import cookieParser from "cookie-parser"
import authRouter from "./routes/authRoutes.js"
import dotenv from 'dotenv';
dotenv.config();
// Validar variables críticas obligatorias
if (!process.env.JWT_SECRET) {
  console.error('❌ ERROR FATAL: JWT_SECRET no está definido en el archivo .env');
  process.exit(1); // El código 1 indica que el proceso terminó debido a un error
}

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(authRouter)

export default app
