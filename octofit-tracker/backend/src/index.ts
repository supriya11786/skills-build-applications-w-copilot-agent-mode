import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import usersRouter from './routes/users'
import teamsRouter from './routes/teams'
import activitiesRouter from './routes/activities'
import leaderboardRouter from './routes/leaderboard'
import workoutsRouter from './routes/workouts'
import connectDB from './database'

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (_req, res) => res.json({ status: 'ok' }))

app.use('/api/users', usersRouter)
app.use('/api/teams', teamsRouter)
app.use('/api/activities', activitiesRouter)
app.use('/api/leaderboard', leaderboardRouter)
app.use('/api/workouts', workoutsRouter)

const API_URL = process.env.CODESPACE_NAME
  ? `https://${process.env.CODESPACE_NAME}-8000.preview.app.github.dev`
  : `http://localhost:${PORT}`

async function start() {
  try {
    await connectDB()
    console.log('API available at', API_URL)
    app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`))
  } catch (err) {
    console.error('Failed to connect to MongoDB', err)
    process.exit(1)
  }
}

start()
