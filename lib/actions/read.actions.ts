'use server'

import { connectToDB } from '../mongoose'
import Read from '../models/read.model'
import { revalidatePath } from 'next/cache'

interface Params {
  type: string
  title: string
  introduction: string
  image: string
  chapter1: string
  chapter2: string
  chapter3: string
  chapter4: string
  chapter5: string
  chapter6: String
  chapter7: string
  conclusion: string
  path: string
}
export async function createRead({
  type,
  title,
  introduction,
  image,
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  conclusion,
  path,
}: Params) {
  try {
    connectToDB()

    const createRead = await Read.create({
      type,
      title,
      introduction,
      image,
      chapter1,
      chapter2,
      chapter3,
      chapter4,
      chapter5,
      chapter6,
      chapter7,
      conclusion,
    })
    revalidatePath(path)
  } catch (error: any) {
    throw new Error(`Failed to add new read: ${error.message}`)
  }
}

export async function fetchReadContent(type: string) {
  try {
    connectToDB()

    const readContentQuery = await Read.findOne({ type: type }).exec()

    return readContentQuery
  } catch (error: any) {
    throw new Error(`Failed to fetch read content: ${error.message}`)
  }
}
