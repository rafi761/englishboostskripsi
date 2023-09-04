import * as z from 'zod'

export const vocabValidation = z.object({
  kata: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  arti: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  level: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
})
