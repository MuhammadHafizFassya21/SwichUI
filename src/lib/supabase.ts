import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://meczixzzigxmddaqgwcf.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lY3ppeHp6aWd4bWRkYXFnd2NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1NTE1MDQsImV4cCI6MjA5MzEyNzUwNH0.dS4ESi-K3865LkXxfJOvVqrTQqvYL4QWOIVhznHYzFQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
