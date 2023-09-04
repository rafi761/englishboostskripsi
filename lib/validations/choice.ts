import * as z from 'zod'

export const choiceValidation = z.object({
  type: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  totalQuestions: z
    .string()
    .nonempty()
    .min(1, { message: 'Minimum 1 characters' }),
  question: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  answer: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  correctAnswer: z
    .string()
    .nonempty()
    .min(1, { message: 'Minimum 1 characters' }),
})
