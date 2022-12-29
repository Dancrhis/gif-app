import {
  ImageList,
  ImageListItem,
  CircularProgress,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSearchGIFList from "../hooks/useSearchGIFList";
import { useContext } from "react";
import { LoginContext } from "context/authentication";



function SearchGIF() {
  
  const [aQuery, setAQuery] = useState("");
  const { searchGIFList, isLoading, search } = useSearchGIFList(aQuery);
  const HandleSearchChange = (e) => {
    setAQuery(e.target.value);
  };
  console.log(searchGIFList);
  const HandleSubmit = (event) => {
    event.preventDefault();
    search();
  };
  if (isLoading) return <CircularProgress />;
  return (
    <div>
      <div>
        <form onSubmit={HandleSubmit}>
          <TextField
            type={"search"}
            onChange={HandleSearchChange}
            value={aQuery}
          />
          <Button type="submit" variant="contained">
            Search
          </Button>
        </form>
      </div>

      <div>
       
        <ImageList variant="quilted" cols={4} rowHeight={164}>
          {searchGIFList.map((gif) => (
            <Link to={`/gif/${gif.id}`}>
            <ImageListItem key={gif.id}>
              <img src={gif.images.original.url} alt="" />
              
            </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
export default SearchGIF;
