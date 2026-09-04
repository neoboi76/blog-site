export const ADMIN_SESSION_COOKIE = "admin_session";

export function isAdminAuthenticated(sessionValue: string | undefined): boolean {
    return Boolean(
        sessionValue &&
            process.env.ADMIN_PASSWORD_HASH &&
            sessionValue === process.env.ADMIN_PASSWORD_HASH,
    );
}
