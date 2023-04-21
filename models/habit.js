import mongoose from 'mongoose'

const Schema = mongoose.Schema

const logSchema = new Schema({
  log: Date,
  habit: {type: Schema.Types.ObjectId, ref: 'Habit'}
}, {
  timestamps: true,
})

const habitSchema = new Schema({
  btnName: String,
  longName: String,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  description: String,
  currentStreak: Number,
  logs: [logSchema]
}, {
  timestamps: true,
})

const Habit = mongoose.model('Habit', habitSchema)

export {
  Habit
}
