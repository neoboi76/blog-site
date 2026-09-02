import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditPostClient from "./EditPostClient";

export default async function EditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) notFound();

  return <EditPostClient post={post} />;
}
