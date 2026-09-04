import { cookies } from "next/headers";
import { LogoutButton } from "@/components/LogoutButton";
import { ReactNode } from "react";
import { ADMIN_SESSION_COOKIE, isAdminAuthenticated } from "@/lib/auth";

export default async function AdminLayout({
    children,
}: {
    children: ReactNode;
}) {
    const cookieStore = await cookies();
    const isAuthed = isAdminAuthenticated(
        cookieStore.get(ADMIN_SESSION_COOKIE)?.value,
    );

    return (
        <div className="min-h-screen bg-background text-foreground">
            {isAuthed && (
                <header className="flex items-center justify-between border-b border-foreground/10 px-6 py-4">
                    <h1 className="text-lg font-semibold">Admin</h1>
                    <LogoutButton />
                </header>
            )}
            <main className="p-6">{children}</main>
        </div>
    );
}
