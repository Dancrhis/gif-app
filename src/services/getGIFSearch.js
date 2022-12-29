function getGIFSearch(query) {
  const GIFTY_SEARCH_URL = "https://api.giphy.com/v1/gifs/search";
  const GIFTY_KEY = "dCgquy9tkKd8KSOSDzQOzGOpj2NGc3l8";
  const LIMIT = 24;

  return fetch(
    `${GIFTY_SEARCH_URL}?api_key=${GIFTY_KEY}&limit=${LIMIT}&q=${query}`
  )
    .then((response) => {
      if (!response.ok) throw new Error("Oh no!!! Something went wrong :(...");
      return response.json();
      // console.log(response.status, response.statusText)
    })
    .then(({ data }) => {
      return data;
    });
}
export default getGIFSearch;
