import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.json({ message: 'List workouts (placeholder)', workouts: [] })
})

router.post('/', (req, res) => {
  const payload = req.body
  res.status(201).json({ message: 'Create workout (placeholder)', workout: payload })
})

export default router
