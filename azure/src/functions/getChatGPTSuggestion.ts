import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext
} from '@azure/functions'
import openai from '../../lib/openai'

export async function getChatGPTSuggestion(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt:
      'Write a random text prompt for DALL·E to generate an image, this prompt will be shown to the user, include details such as the genre and what type of painting it should be, options can include: oil painting, watercolor, photo-realistic, 4k, abstract, modern, black and white etc. Do not wrap the answer in quotes.',
    max_tokens: 100,
    temperature: 0.8
  })
  context.log(`Http function processed request for url "${request.url}"`)

  return { body: response.data.choices[0].text }
}

app.http('getChatGPTSuggestion', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: getChatGPTSuggestion
})
