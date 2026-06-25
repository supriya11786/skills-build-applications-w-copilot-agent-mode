import { Schema, model } from 'mongoose'

const WorkoutSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    exercises: [{ name: String, reps: Number, sets: Number, durationMin: Number }],
    durationMin: { type: Number },
    difficulty: { type: String }
  },
  { timestamps: true }
)

export default model('Workout', WorkoutSchema)
