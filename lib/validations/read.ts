import * as z from 'zod'

export const readValidation = z.object({
  type: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  title: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  introduction: z
    .string()
    .nonempty()
    .min(1, { message: 'Minimum 1 characters' }),
  image: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  chapter1: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  chapter2: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  chapter3: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  chapter4: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  chapter5: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  chapter6: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  chapter7: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
  conclusion: z.string().nonempty().min(1, { message: 'Minimum 1 characters' }),
})
