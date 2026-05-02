import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://meczixzzigxmddaqgwcf.supabase.co";
export const SUPABASE_ANON_KEY = "sb_publishable_hScDAILR_fkJsI_KftGXYA_iRmDlV8M";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
