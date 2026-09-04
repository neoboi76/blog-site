"use client";

import { deletePost } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeletePostButton({
    id,
    title,
}: {
    id: string;
    title: string;
}) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleDelete = async () => {
        const confirmed = window.confirm(
            `Delete "${title}"? This cannot be undone.`,
        );
        if (!confirmed) return;

        setIsDeleting(true);
        setError(null);

        try {
            await deletePost(id);
            router.refresh();
        } catch {
            setError("Failed to delete");
            setIsDeleting(false);
        }
    };

    return (
        <span className="flex items-center gap-2">
            <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="text-sm text-red-500 hover:underline disabled:opacity-50 cursor-pointer"
            >
                {isDeleting ? "Deleting..." : "Delete"}
            </button>
            {error && <span className="text-xs text-red-500">{error}</span>}
        </span>
    );
}
