
import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks
// Using placeholder values when environment variables are not available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-supabase-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

// Check if we're using the real values or fallbacks
if (supabaseUrl === 'https://your-supabase-project.supabase.co' || 
    supabaseAnonKey === 'your-anon-key') {
  console.warn(
    'Using placeholder Supabase credentials. Please set the VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY ' +
    'environment variables in your Supabase project settings.'
  );
}

// Create the Supabase client
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);
