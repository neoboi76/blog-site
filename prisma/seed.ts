import { PrismaClient } from "../src/generated/prisma/client";
import { posts } from "../posts";

const prisma = new PrismaClient();

async function main() {
  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: {
        id: post.id,
        title: post.title,
        slug: post.slug,
        content: post.content,
        published: post.published,
        publishedAt: post.publishedAt,
        createdAt: post.createdAt,
        updatedAt: post.UpdatedAt,
      },
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });