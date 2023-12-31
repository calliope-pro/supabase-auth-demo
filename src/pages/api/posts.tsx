// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma, { Post } from '#/lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post[]>
) {
    const posts = await prisma.post.findMany()
    res.status(200).json(posts)
}
