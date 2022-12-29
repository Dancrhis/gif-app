import { GIFTY_KEY } from "./getGIFList";
const SINGLE_GIF_ENPOINT = `https://api.giphy.com/v1/gifs`;
function getSingleGIF(params) {
  return fetch(`${SINGLE_GIF_ENPOINT}/${params.id}?api_key=${GIFTY_KEY}`)
    .then((response) => response.json())
    .then(({ data }) => data);
}
export default getSingleGIF;
