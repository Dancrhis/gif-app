import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, ImageListItem } from "@mui/material";
import useGIF from "hooks/useGIF";
import { LoginContext } from "context/authentication";

function SingleGif() {
  const params = useParams();
  const { GIF, isLoading } = useGIF(params);
  const { userdata, doAddLike } = useContext(LoginContext);
  if (isLoading) return <h1>Loading ...</h1>;
  return (
    <div>
      <ImageListItem key={GIF.id}>
        <img src={GIF.images.original.url} alt="un GIF" />
      </ImageListItem>
      <h1>{params.id}</h1>

      <Button
        variant="contained"
        onClick={() => doAddLike(GIF.images.original.url, userdata)}
      >
        like
      </Button>
    </div>
  );
}

export default SingleGif;
