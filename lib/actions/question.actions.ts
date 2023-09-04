'use server'

import { connectToDB } from '../mongoose'
import Choice from '../models/questionmultiple.model'
import { revalidatePath } from 'next/cache'

interface Params {
  type: string
  totalQuestions: String
  question: string
  answer: string
  correctAnswer: string
  path: string
}
export async function createChoiceQuestion({
  type,
  totalQuestions,
  question,
  answer,
  correctAnswer,
  path,
}: Params) {
  try {
    connectToDB()

    const createQuestion = await Choice.create({
      type,
      totalQuestions,
      question,
      answer,
      correctAnswer,
    })
    revalidatePath(path)
  } catch (error: any) {
    throw new Error(
      `Failed to create multiple choice question: ${error.message}`
    )
  }
}
