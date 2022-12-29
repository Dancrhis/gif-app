import { useEffect, useState } from "react";
import getGIFList from "../services/getGIFList";

function useGIFList() {
  const [gifList, setGIFList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getGIFList()
      .then((data) => {
        setGIFList(data);

      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(setIsLoading(false));
  }, []);

  return {
    gifList,
    isLoading,
  };
}
export default useGIFList;
