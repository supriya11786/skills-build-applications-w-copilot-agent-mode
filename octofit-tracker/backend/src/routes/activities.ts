import { Router } from 'express'
import Activity from '../models/activity'

const router = Router()

router.get('/', async (_req, res) => {
  const activities = await Activity.find().populate('user').sort({ date: -1 }).limit(200)
  res.json({ activities })
})

router.post('/', async (req, res) => {
  try {
    const activity = await Activity.create(req.body)
    res.status(201).json({ activity })
  } catch (err: any) {
    res.status(400).json({ error: err.message })
  }
})

export default router
