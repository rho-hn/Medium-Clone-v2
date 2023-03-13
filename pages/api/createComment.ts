// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from '@sanity/client'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: 'ev0t89bl',
  useCdn: process.env.NODE_ENV === 'production',
  token: 'skzTcLiqasO2GSwpag75LIu62Slwlb9JzWzNHh9i0nZD8AsErfWevyhe9QSVde48YvfQeTLzIda1XkOjnhCeSzfioZsXRwK76Hp1aCGk9NOESwGoAnZK7WhphckSoQ3baNUQXgBWRkaKQaSr065QDoGX3YFHN1CuoBPtcDpd7pQurC3ukUuY',
}

const client = sanityClient(config)

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, name, email, comment } = JSON.parse(req.body)
  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    })
  } catch (err) {
    return res.status(500).json({ message: "Couldn't submit comment", err })
  }
  console.log('comment submitted')
  res.status(200).json({ message: 'Comment submitted' })
}
