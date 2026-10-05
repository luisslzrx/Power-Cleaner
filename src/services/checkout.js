import { supabase } from '../supabase'

export async function createCheckout(items, shipping, form) {
  try {
    const { data, error } = await supabase.functions.invoke('create-checkout', {
      body: {
        items,
        shipping,
        form,
      },
    })

    if (error) {
      console.error('Supabase function error:', error)
      if (error.context) {
        try {
          const errorText = await error.context.text()
          console.error('Function error text:', errorText)
          try {
            const errorBody = JSON.parse(errorText)
            throw new Error(errorBody.error || errorBody.message || error.message)
          } catch (_) {
            throw new Error(errorText || error.message)
          }
        } catch (readErr) {
          console.error('Error reading function response body:', readErr)
          throw error
        }
      }
      throw error
    }

    return data.url
  } catch (err) {
    console.error('createCheckout failed:', err)
    throw err
  }
}
