"use client";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { useState } from "react";

export default function PostEditor({
  onSave,
}: {
  onSave: (json: any) => void;
}) {
  const [title, setTitle] = useState("");
  const editor = useCreateBlockNote();

  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg border border-foreground/10 bg-background text-foreground overflow-hidden">
      <input
        type="text"
        placeholder="Title. . . "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-3 text-2xl font-bold bg-transparent
                   border-b border-foreground/10 focus:outline-none
                   placeholder:text-foreground/40"
      />
      <div className="min-h-[400px] max-h-[70vh] overflow-y-auto font-sans">
        <BlockNoteView editor={editor} />
      </div>
      <div className="flex justify-end border-t border-foreground/10 p-3">
        <button
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background
                 hover:opacity-90 active:opacity-80
                 disabled:opacity-50 disabled:cursor-not-allowed
                 cursor-pointer transition-opacity"
          onClick={() => onSave({ title, content: editor.document })}
        >
          Save
        </button>
      </div>
    </div>
  );
}
