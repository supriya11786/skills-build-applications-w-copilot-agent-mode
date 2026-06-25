import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.json({ message: 'List users (placeholder)', users: [] })
})

router.post('/', (req, res) => {
  const payload = req.body
  res.status(201).json({ message: 'Create user (placeholder)', user: payload })
})

export default router
