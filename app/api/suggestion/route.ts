export async function GET(request: Request) {
  // Connect to our Microsoft Azure Function endpoint

  const response = await fetch('...', {
    cache: 'no-cache' // New suggestions
  })
  const textData = await response.text()
  return new Response(JSON.stringify(textData.trim()), {
    status: 200
  })
}
