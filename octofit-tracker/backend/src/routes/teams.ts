import { Router } from 'express'
import Team from '../models/team'

const router = Router()

router.get('/', async (_req, res) => {
  const teams = await Team.find().populate('members')
  res.json({ teams })
})

router.post('/', async (req, res) => {
  try {
    const team = await Team.create(req.body)
    res.status(201).json({ team })
  } catch (err: any) {
    res.status(400).json({ error: err.message })
  }
})

export default router
