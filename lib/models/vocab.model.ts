import mongoose from 'mongoose'

const vocabSchema = new mongoose.Schema({
  kata: {
    type: String,
    required: true,
    unique: true,
  },
  arti: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
})

const Vocab = mongoose.models.Vocab || mongoose.model('Vocab', vocabSchema)
export default Vocab
