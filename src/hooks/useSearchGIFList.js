import { useState } from "react";
import getGIFSearch from "../services/getGIFSearch";

function useSearchGIFList(query) {
  const [searchGIFList, setSearchGIFList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function search() {
    setIsLoading(true);
    getGIFSearch(query)
      .then((data) => {
        setSearchGIFList(data);
      })
      .catch((error) => error.message)
      .finally(setIsLoading(false));
  }

  return {
    search,
    searchGIFList,
    isLoading,
  };
}
export default useSearchGIFList;
