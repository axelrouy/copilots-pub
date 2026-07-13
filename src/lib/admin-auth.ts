import { createHash } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "pub_admin";

function password(): string {
  return process.env.ADMIN_PASSWORD ?? "";
}

/** Deterministic token derived from the configured password. */
export function expectedToken(): string {
  return createHash("sha256")
    .update(`ai-tips-pub::${password()}`)
    .digest("hex");
}

export function checkPassword(candidate: string): boolean {
  const pwd = password();
  return pwd.length > 0 && candidate === pwd;
}

/** True when the request carries a valid admin cookie. */
export async function isAuthed(): Promise<boolean> {
  if (password().length === 0) return false;
  const store = await cookies();
  return store.get(ADMIN_COOKIE)?.value === expectedToken();
}
