// components/PostEditor.tsx
"use client";

import { Editor } from "novel";

export default function PostEditor({
  initialContent,
  onSave,
}: {
  initialContent?: string;
  onSave: (html: string) => void;
}) {
  return (
    <Editor
      defaultValue={initialContent}
      onUpdate={(editor) => {
        const html = editor?.getHTML() ?? "";
        onSave(html);
      }}
    />
  );
}
