const SUPABASE_URL = "https://dcvrsrghdprzhaciyxir.supabase.co"

const SUPABASE_PUBLISHABLE_KEY =
"sb_publishable_oXEymfYSFABZD7cMq9tnnQ_BdMHS1K5"

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
