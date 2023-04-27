import mongoose from 'mongoose'

const Schema = mongoose.Schema

const journalSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  entry: {type: String},
}, {
  timestamps: true,
})

// const User = mongoose.model('User', userSchema)
const Journal = mongoose.model('Journal', journalSchema)

export {
  Journal
}