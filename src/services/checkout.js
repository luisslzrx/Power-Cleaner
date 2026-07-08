export async function createCheckout(items) {
  const response = await fetch(
    'https://rjpvzmtnottuvagzaybe.supabase.co/functions/v1/create-checkout',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items,
      }),
    },
  )

  if (!response.ok) {
    throw new Error('Error al crear checkout')
  }

  const data = await response.json()

  return data.url
}
