"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
    };

    return (
        <button
            onClick={handleLogout}
            className="text-sm text-foreground/60 hover:text-foreground hover:underline cursor-pointer"
        >
            Log out
        </button>
    );
}
