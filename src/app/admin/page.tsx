// app/admin/page.tsx
"use client";

import { createPost } from "@/lib/savePost";
import dynamic from "next/dynamic";

const PostEditor = dynamic(() => import("@/components/PostEditor"), {
  ssr: false,
});

export default function Page() {
  const handleSave = async (data: { title: string; content: any }) => {
    const post = await createPost(data);
    console.log(post);
  };

  return <PostEditor onSave={handleSave} />;
}
