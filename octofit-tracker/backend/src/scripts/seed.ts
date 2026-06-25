/**
 * Seed the octofit_db database with test data
 */
import mongoose from 'mongoose'
import User from '../models/user'
import Team from '../models/team'
import Activity from '../models/activity'
import Leaderboard from '../models/leaderboard'
import Workout from '../models/workout'

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit_db'

async function seed() {
  console.log('Seed the octofit_db database with test data')
  await mongoose.connect(MONGO_URI)
  console.log('Connected to', MONGO_URI)

  // Clear existing data
  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Workout.deleteMany({})
  ])

  // Create users
  const users = await User.create([
    { name: 'Alex Rivera', email: 'alex@example.com', bio: 'Runner and triathlete' },
    { name: 'Samira Khan', email: 'samira@example.com', bio: 'Strength trainer' },
    { name: 'Jordan Lee', email: 'jordan@example.com', bio: 'Cyclist' }
  ])

  // Teams
  const teams = await Team.create([
    { name: 'OctoRunners', members: [users[0]._id, users[2]._id] },
    { name: 'PowerLifters', members: [users[1]._id] }
  ])

  // Activities
  const activities = await Activity.create([
    { user: users[0]._id, type: 'run', durationMin: 45, distanceKm: 10.2, calories: 600 },
    { user: users[1]._id, type: 'weights', durationMin: 60, calories: 450 },
    { user: users[2]._id, type: 'ride', durationMin: 90, distanceKm: 40, calories: 1200 }
  ])

  // Workouts
  const workouts = await Workout.create([
    {
      title: 'Full Body Strength',
      description: 'Compound lifts and accessory work',
      exercises: [
        { name: 'Squat', reps: 5, sets: 5 },
        { name: 'Bench Press', reps: 5, sets: 5 }
      ],
      durationMin: 60,
      difficulty: 'intermediate'
    },
    {
      title: 'Morning Run',
      description: 'Easy paced 5k',
      exercises: [],
      durationMin: 30,
      difficulty: 'easy'
    }
  ])

  // Leaderboard
  const leaderboard = await Leaderboard.create([
    { user: users[2]._id, score: 1500 },
    { user: users[0]._id, score: 1200 },
    { user: users[1]._id, score: 900 }
  ])

  console.log('Seeded:', {
    users: users.length,
    teams: teams.length,
    activities: activities.length,
    workouts: workouts.length,
    leaderboard: leaderboard.length
  })

  await mongoose.disconnect()
  console.log('Disconnected. Seed complete.')
}

seed().catch((err) => {
  console.error('Seed failed', err)
  process.exit(1)
})
