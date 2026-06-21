import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import formsRoutes from './routes/forms.routes.js'
import healthRouter from './routes/health.routes.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'
const currentDirectory = path.dirname(fileURLToPath(import.meta.url))
const uploadsDirectory = path.resolve(currentDirectory, '../uploads')

app.use(
  cors({
    origin: frontendUrl,
  }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(uploadsDirectory))

app.use('/api/health', healthRouter)
app.use('/api/forms', formsRoutes)

app.use((error, _request, response, _next) => {
  console.error('Request failed:', error)
  response.status(500).json({
    success: false,
    message: 'Something went wrong',
  })
})

app.listen(port, () => {
  console.log(`Pixel Labs backend is running on port ${port}`)
})
