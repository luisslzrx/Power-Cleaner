import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rjpvzmtnottuvagzaybe.supabase.co'
const supabaseKey = 'sb_publishable_CU4eG-ONNEhQ398d64TiYg_f_GgEcri'

export const supabase = createClient(supabaseUrl, supabaseKey)