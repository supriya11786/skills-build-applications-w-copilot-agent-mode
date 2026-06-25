import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.json({ message: 'List activities (placeholder)', activities: [] })
})

router.post('/', (req, res) => {
  const payload = req.body
  res.status(201).json({ message: 'Log activity (placeholder)', activity: payload })
})

export default router
