import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabaseInstance: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  }

  return supabaseInstance;
}

export interface WaitlistEntry {
  name: string;
  email: string;
  use_case: string;
  description: string;
}

export async function submitToWaitlist(entry: WaitlistEntry) {
  const client = getSupabase();
  if (!client) {
    throw new Error("Supabase not configured");
  }

  const { data, error } = await client
    .from("waitlist")
    .insert([entry])
    .select();

  if (error) throw error;
  return data;
}
