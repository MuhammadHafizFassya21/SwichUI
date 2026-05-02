import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// 1) Buat project di Supabase
// 2) Buka: Project Settings → API
// 3) Tempelkan nilai berikut:
export const SUPABASE_URL = "https://meczixzzigxmddaqgwcf.supabase.co";
export const SUPABASE_ANON_KEY = "sb_publishable_hScDAILR_fkJsI_KftGXYA_iRmDlV8M";

if (
  SUPABASE_URL.includes("PASTE_SUPABASE_URL_HERE") ||
  SUPABASE_ANON_KEY.includes("PASTE_SUPABASE_ANON_KEY_HERE")
) {
  console.warn(
    "[SwichUI] Supabase config belum diisi. Edit `supabaseClient.js` lalu isi SUPABASE_URL & SUPABASE_ANON_KEY."
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
