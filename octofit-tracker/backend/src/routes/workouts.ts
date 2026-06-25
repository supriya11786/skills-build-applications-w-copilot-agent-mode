import { Router } from 'express'
import Workout from '../models/workout'

const router = Router()

router.get('/', async (_req, res) => {
  const workouts = await Workout.find().limit(100)
  res.json({ workouts })
})

router.post('/', async (req, res) => {
  try {
    const workout = await Workout.create(req.body)
    res.status(201).json({ workout })
  } catch (err: any) {
    res.status(400).json({ error: err.message })
  }
})

export default router
