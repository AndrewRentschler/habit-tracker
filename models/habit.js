import mongoose from 'mongoose'

const Schema = mongoose.Schema

const habitSchema = new Schema({
  btnName: {
    type: String,
    required: true,
    min: 0,
    max: 32,
  },
  owner: { 
    type: Schema.Types.ObjectId, 
    ref: 'Profile' 
  },
  currentStreak: {
    type: Number,
    default: 0,
  }
}, {
  timestamps: true,
})

const Habit = mongoose.model('Habit', habitSchema)

export {
  Habit
}
