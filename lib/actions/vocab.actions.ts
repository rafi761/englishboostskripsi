'use server'

import { connectToDB } from '../mongoose'
import Vocab from '../models/vocab.model'
import { revalidatePath } from 'next/cache'
import { FilterQuery } from 'mongoose'

interface Params {
  kata: string
  arti: string
  level: string
  path: string
}
export async function createVocab({ kata, arti, level, path }: Params) {
  try {
    connectToDB()

    const createVocab = await Vocab.create({
      kata,
      arti,
      level,
    })
    revalidatePath(path)
  } catch (error: any) {
    throw new Error(`Failed to add new vocab: ${error.message}`)
  }
}

export async function fetchVocabs({
  level,
  searchString = '',
  pageNumber = 1,
  pageSize = 20,
}: {
  level: string
  searchString?: string
  pageNumber?: number
  pageSize?: number
}) {
  try {
    connectToDB()

    const skipAmount = (pageNumber - 1) * pageSize

    const regex = new RegExp(searchString, 'i')
    const query: FilterQuery<typeof Vocab> = {}
    if (searchString.trim() !== '') {
      query.$or = [{ kata: { $regex: regex } }]
    }

    if (level) {
      query.level = level
    }

    const vocabsQuery = Vocab.find(query).skip(skipAmount).limit(pageSize)

    const totalVocabsCount = await Vocab.countDocuments({})

    const vocabs = await vocabsQuery.exec()

    const isNext = totalVocabsCount > skipAmount + vocabs.length

    return { vocabs, isNext }
  } catch (error: any) {
    throw new Error(`Failed to fetch all vocabs`)
  }
}
