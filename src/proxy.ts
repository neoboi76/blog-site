import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_SESSION_COOKIE, isAdminAuthenticated } from "@/lib/auth";

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isAuthed = isAdminAuthenticated(
        request.cookies.get(ADMIN_SESSION_COOKIE)?.value,
    );

    if (pathname === "/admin/login" && isAuthed) {
        return NextResponse.redirect(new URL("/admin", request.url));
    }

    if (
        pathname.startsWith("/api/admin") &&
        pathname !== "/api/admin/login" &&
        !isAuthed
    ) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (
        pathname.startsWith("/admin") &&
        pathname !== "/admin/login" &&
        !isAuthed
    ) {
        return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/api/admin/:path*"],
};
