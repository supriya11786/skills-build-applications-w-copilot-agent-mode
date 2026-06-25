import { Router } from 'express'
import User from '../models/user'

const router = Router()

router.get('/', async (_req, res) => {
  const users = await User.find().limit(100)
  res.json({ users })
})

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ user })
  } catch (err: any) {
    res.status(400).json({ error: err.message })
  }
})

export default router
