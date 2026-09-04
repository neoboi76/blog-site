import { prisma } from "./prisma";

export default async function getPosts() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { updatedAt: "desc" },
    });
    return posts;
}
