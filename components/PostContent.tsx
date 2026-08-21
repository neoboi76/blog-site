"use client";

import { useCreateBlockNote } from "@blocknote/react";

function isEmptyParagraph(block: any) {
  return (
    block.type === "paragraph" && (!block.content || block.content.length === 0)
  );
}

export default function PostContent({ content }: { content: any }) {
  const cleanedContent = content.filter(
    (block: any) => !isEmptyParagraph(block),
  );

  const editor = useCreateBlockNote({ initialContent: cleanedContent });
  const html = editor.blocksToHTMLLossy(cleanedContent);

  return (
    <div
      className="prose lg:prose-xl [&_*]:!text-white"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
