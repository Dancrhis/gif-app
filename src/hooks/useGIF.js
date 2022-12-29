import { useEffect, useState } from "react";
import getSingleGif from "services/getSingleGIF";

function useGIF(params) {
  const [isLoading, setIsLoading] = useState(true);
  const [GIF, setGIF] = useState(null);

  useEffect(() => {
      getSingleGif(params)
      .then((data) => {
        setGIF(data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error);
      })
  },[params] );

  return {
    isLoading,
    GIF,
  };
}
export default useGIF;
