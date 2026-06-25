import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.json({ message: 'List teams (placeholder)', teams: [] })
})

router.post('/', (req, res) => {
  const payload = req.body
  res.status(201).json({ message: 'Create team (placeholder)', team: payload })
})

export default router
