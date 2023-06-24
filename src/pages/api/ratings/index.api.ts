import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const ratings = await prisma.rating.findMany({
    include: {
      book: true,
      user: true,
    },
  })

  return res.json({ ratings })
}
