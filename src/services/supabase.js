import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://vydndmaptvrbipekpnke.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5ZG5kbWFwdHZyYmlwZWtwbmtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5ODE3ODAsImV4cCI6MjAzNDU1Nzc4MH0.PBKS_t6Tnq7aVaefqgZiozoa4SMBySVP9inmjsdWjjQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
