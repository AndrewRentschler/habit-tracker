import mongoose from 'mongoose'

const Schema = mongoose.Schema

const logSchema = new Schema({
  log: Date,
  habit: {type: Schema.Types.ObjectId, ref: 'Habit'}
}, {
  timestamps: true,
})

const habitSchema = new Schema({
  btnName: {
    type: String,
    required: true,
  },
  longName: {
    type: String,
  },
  owner: { 
    type: Schema.Types.ObjectId, 
    ref: 'Profile' 
  },
  currentStreak: {
    type: Number,
    default: 0,
  },
  logs: [logSchema]
}, {
  timestamps: true,
})

const Habit = mongoose.model('Habit', habitSchema)

export {
  Habit
}
