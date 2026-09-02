"use client";
import {
  BasicTextStyleButton,
  BlockTypeSelect,
  CreateLinkButton,
  FormattingToolbar,
  FormattingToolbarController,
  useCreateBlockNote,
} from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import type { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { useState } from "react";

type PostContent = Block[];

export default function PostEditor({
  initialTitle = "",
  initialContent,
  onSave,
}: {
  initialTitle?: string;
  initialContent?: PostContent;
  onSave: (json: { title: string; content: PostContent }) => void;
}) {
  const [title, setTitle] = useState(initialTitle);
  const editor = useCreateBlockNote({
    initialContent:
      initialContent && initialContent.length > 0 ? initialContent : undefined,
  });

  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg border border-foreground/10 bg-background text-foreground overflow-hidden">
      <input
        type="text"
        placeholder="Title. . . "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-3 text-2xl font-bold bg-transparent border-b border-foreground/10 focus:outline-none placeholder:text-foreground/40"
      />
      <div className="min-h-[400px] w-screen max-w-3xl overflow-y-auto font-sans [&_*]:!text-white">
        <BlockNoteView editor={editor} formattingToolbar={false}>
          <FormattingToolbarController
            formattingToolbar={() => (
              <FormattingToolbar>
                <BlockTypeSelect key="blockaTypeSelect" />
                <BasicTextStyleButton
                  basicTextStyle="bold"
                  key="boldStyleButton"
                />
                <BasicTextStyleButton
                  basicTextStyle="italic"
                  key="italicStyleButton"
                />
                <BasicTextStyleButton
                  basicTextStyle="underline"
                  key="underlineStyleButton"
                />
                <BasicTextStyleButton
                  basicTextStyle="strike"
                  key="strikeStyleButton"
                />
                <CreateLinkButton key="createLinkButton" />
              </FormattingToolbar>
            )}
          />
        </BlockNoteView>
      </div>
      <div className="flex justify-end border-t border-foreground/10 p-3">
        <button
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 active:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-opacity"
          onClick={() => onSave({ title, content: editor.document })}
        >
          Save
        </button>
      </div>
    </div>
  );
}
