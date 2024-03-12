
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mjbbheegvbhyscprnzei.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qYmJoZWVndmJoeXNjcHJuemVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxNzQ4MzUsImV4cCI6MjAyNTc1MDgzNX0.UOPE0kcoV8J5nXRK9lY-GCvczOH8P1-J157oosph0fc'
export const supabase = createClient(supabaseUrl, supabaseKey)

// export default supabase;