import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
    avatarUrl: { type: String }
  },
  { timestamps: true }
)

export default model('User', UserSchema)
