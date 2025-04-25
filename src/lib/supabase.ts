
import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://wntnuwmssmnszknhodse.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndudG51d21zc21uc3prbmhvZHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1ODE1OTQsImV4cCI6MjA2MTE1NzU5NH0.MGJh8HLw-O3dM3t2CwMFEJ9ubjcOUtW_paXPGL0-3ME";

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});
