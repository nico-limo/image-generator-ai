const fetchSuggestionFromChatGPT = () =>
  fetch('/api/suggestion', {
    cache: 'no-store'
  }).then((res) => res)

export default fetchSuggestionFromChatGPT
