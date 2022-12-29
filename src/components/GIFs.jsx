import {
  ImageList,
  ImageListItem,
  CircularProgress,
  Button,
} from "@mui/material";
import useGIFList from "../hooks/useGIFList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "context/authentication";

function GIFs() {
  const { gifList, isLoading } = useGIFList();

  if (isLoading) return <CircularProgress />;

  return (
    <div>
      <ImageList variant="quilted" cols={4} rowHeight={164}>
        {gifList.map((gif) => (
          <>
            <Link to={`/gif/${gif.id}`}>
              <ImageListItem key={gif.id}>
                <img src={gif.images.original.url} alt="un GIF" />
              </ImageListItem>
            </Link>
          </>
        ))}
      </ImageList>
    </div>
  );
}
export default GIFs;
