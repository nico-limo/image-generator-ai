import { Configuration, OpenAIApi } from '@/node_modules/openai'
const configuration = new Configuration({
  organization: process.env.OPEN_AI_ORGANIZATION,
  apiKey: process.env.OPEN_AI_KEY
})
const openai = new OpenAIApi(configuration)

export default openai
