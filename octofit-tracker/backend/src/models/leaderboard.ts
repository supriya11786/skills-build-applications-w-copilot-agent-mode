import { Schema, model } from 'mongoose'

const LeaderboardSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    score: { type: Number, default: 0 }
  },
  { timestamps: true }
)

export default model('Leaderboard', LeaderboardSchema)
