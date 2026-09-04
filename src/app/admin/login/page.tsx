"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            if (res.ok) {
                router.push("/admin");
                router.refresh();
            } else {
                setError("Incorrect password");
            }
        } catch {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto mt-20 flex flex-col gap-3"
        >
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin password"
                disabled={loading}
                className="border border-foreground/20 rounded-md px-3 py-2 bg-transparent disabled:opacity-50"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
                disabled={loading}
                className="bg-foreground text-background rounded-md px-4 py-2 disabled:opacity-50 cursor-pointer"
            >
                {loading ? "Logging in..." : "Log in"}
            </button>
        </form>
    );
}
