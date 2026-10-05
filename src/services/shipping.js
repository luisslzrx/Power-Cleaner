import { supabase } from '../supabase'

export const getShippingQuote = async (address) => {
  const { data, error } = await supabase.functions.invoke('shipping-quote', {
    body: {
      postalCode: address.postalCode,
      state: address.state,
      city: address.city,
      suburb: address.suburb,
      street: address.street,
      number: address.number,
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

  return data
}
