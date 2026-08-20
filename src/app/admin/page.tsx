// app/admin/page.tsx
"use client";

import dynamic from "next/dynamic";

const PostEditor = dynamic(() => import("@/components/PostEditor"), {
  ssr: false,
});

export default function Page() {
  return <PostEditor />;
}
