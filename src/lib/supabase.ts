import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url =
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

/**
 * Server-side Supabase client using the service_role key.
 * Bypasses RLS — MUST only be imported from server code (API routes).
 * Returns null when env vars are missing, so the app falls back to the
 * in-memory store (useful for local dev without secrets).
 */
export const supabase: SupabaseClient | null =
  url && serviceKey
    ? createClient(url, serviceKey, { auth: { persistSession: false } })
    : null;
