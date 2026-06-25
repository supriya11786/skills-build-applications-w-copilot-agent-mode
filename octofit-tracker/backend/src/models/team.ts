import { Schema, model } from 'mongoose'

const TeamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
)

export default model('Team', TeamSchema)
