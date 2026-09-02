"use client";
import PostEditor from "@/components/PostEditor";
import { createPost } from "@/lib/actions";

export default function NewPostPage() {
  const handleSave = async (data: { title: string; content: any }) => {
    await createPost(data);
  };

  return <PostEditor onSave={handleSave} />;
}
