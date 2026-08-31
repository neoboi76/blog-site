"use client";

import { createPost } from "@/lib/savePost";
import dynamic from "next/dynamic";

const PostEditor = dynamic(() => import("@/components/PostEditor"), {
  ssr: false,
});

export default function Page() {
  const handleSave = async (data: { title: string; content: any }) => {
    await createPost(data);
  };

  return <PostEditor onSave={handleSave} />;
}
