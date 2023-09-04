import mongoose from 'mongoose'

const readSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  chapter1: {
    type: String,
  },
  chapter2: {
    type: String,
  },
  chapter3: {
    type: String,
  },
  chapter4: {
    type: String,
  },
  chapter5: {
    type: String,
  },
  chapter6: {
    type: String,
  },
  chapter7: {
    type: String,
  },
  conclusion: {
    type: String,
  },
})

const Read = mongoose.models.Read || mongoose.model('Read', readSchema)
export default Read
