import express from "express"
import cookieParser from "cookie-parser"
import helmet from "helmet"
import authRouter from "./routes/authRoutes.js"
import productsRouter from "./routes/products.routes.js"
import dotenv from 'dotenv';
dotenv.config();
// Validar variables críticas obligatorias
if (!process.env.JWT_SECRET) {
  console.error('❌ ERROR FATAL: JWT_SECRET no está definido en el archivo .env');
  process.exit(1); // El código 1 indica que el proceso terminó debido a un error
}

const app = express();

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(authRouter)
app.use(productsRouter)

export default app
