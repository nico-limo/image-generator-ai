export async function GET(request: Request) {
  try {
    const response = await fetch(
      'http://localhost:7071/api/getChatGPTSuggestion'
    )
    const textData = await response.text()
    return new Response(JSON.stringify(textData), {
      status: 200
    })
  } catch (error) {
    console.log('EL PUTO ERROR ', error)
  }
}
