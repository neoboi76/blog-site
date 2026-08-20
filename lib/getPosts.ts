import { prisma } from "./prisma";

export default async function getPosts() {
    const posts = await prisma.post.findMany();
    return posts;

    
}