"use client";

import type { Block } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";

function isEmptyParagraph(block: Block): boolean {
    return (
        block.type === "paragraph" &&
        (!block.content || block.content.length === 0)
    );
}

export default function PostContent({ content }: { content: Block[] }) {
    const cleanedContent = content.filter(
        (block: Block) => !isEmptyParagraph(block),
    );

    const editor = useCreateBlockNote({ initialContent: cleanedContent });
    const html = editor.blocksToHTMLLossy(cleanedContent);

    return (
        <div
            className="prose lg:prose-lg [&_*]:!text-white"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
