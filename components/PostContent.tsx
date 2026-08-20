"use client";

import { useCreateBlockNote } from "@blocknote/react";

export default function PostContent({ content }: { content: any }) {
  const editor = useCreateBlockNote({ initialContent: content });
  const html = editor.blocksToHTMLLossy(content);

  return (
    <div
      className="prose lg:prose-xl text-amber-50"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
