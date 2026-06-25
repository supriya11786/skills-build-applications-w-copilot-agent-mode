import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit_db'

export async function connectDB() {
  await mongoose.connect(MONGO_URI)
  console.log('Connected to MongoDB at', MONGO_URI)
}

export async function disconnectDB() {
  await mongoose.disconnect()
  console.log('Disconnected from MongoDB')
}

export default connectDB
