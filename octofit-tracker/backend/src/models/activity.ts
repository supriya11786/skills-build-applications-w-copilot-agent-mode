import { Schema, model } from 'mongoose'

const ActivitySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    durationMin: { type: Number },
    distanceKm: { type: Number },
    calories: { type: Number },
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
)

export default model('Activity', ActivitySchema)
