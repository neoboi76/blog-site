"use client";
import PostEditor from "@/components/PostEditor";
import { updatePost } from "@/lib/actions";

export default function EditPostClient({ post }: { post: any }) {
  const handleSave = async (data: { title: string; content: any }) => {
    await updatePost({ id: post.id, ...data });
  };

  return (
    <PostEditor
      initialTitle={post.title}
      initialContent={post.content}
      onSave={handleSave}
    />
  );
}
