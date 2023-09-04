import mongoose from 'mongoose'

const choiceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  totalQuestions: {
    type: String,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: Array,
    required: true,
  },
  correctAnswer: {
    type: String,
  },
})

const Choice = mongoose.models.Choice || mongoose.model('Choice', choiceSchema)
export default Choice
