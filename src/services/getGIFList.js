export const GIFTY_KEY = "dCgquy9tkKd8KSOSDzQOzGOpj2NGc3l8";
const GIFTY_URL = "https://api.giphy.com/v1/gifs/trending";
function getGIFlist() {

  return fetch(`${GIFTY_URL}?api_key=${GIFTY_KEY}`)
    .then((response) => {
      if (!response.ok) throw new Error("Oh no!!! Something went wrong :(...");
      return response.json();
      // console.log(response.status, response.statusText)
    })
    .then(({ data }) => {
      return data;
    });
}
export default getGIFlist;
