import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface WaitlistEntry {
  name: string;
  email: string;
  use_case: string;
  description: string;
}

export async function submitToWaitlist(entry: WaitlistEntry) {
  const { data, error } = await supabase
    .from("waitlist")
    .insert([entry])
    .select();

  if (error) throw error;
  return data;
}
