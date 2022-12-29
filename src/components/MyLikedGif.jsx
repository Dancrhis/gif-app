import { ImageList, ImageListItem } from "@mui/material";
import { LoginContext } from "context/authentication";
import { useContext, useState } from "react";
import { gql, useQuery } from "@apollo/client";

export const GET_USER_LIKES = gql`
  query getLikes($token: InputToken) {
    getLikes(token: $token) {
      url
    }
  }
`;

function MyLikedGif() {
  const { userdata } = useContext(LoginContext);
  const { data: getLikeData, loading } = useQuery(GET_USER_LIKES, {
    variables: {
      token: {
        username: userdata.username,
        id: userdata.id,
        name: userdata.name,
        lastname: userdata.lastname,
      },
    },
  });

  if (loading) return <h1>cargando.........</h1>;
  if(!getLikeData) return <h1>no ha dado like a ningun gif</h1>
  return (
    <div>
      <ImageList>
        {console.log(getLikeData)}
        {getLikeData.getLikes.map((gif) => {
          return (
            <ImageListItem>
              <img src={gif.url} alt="" />
            </ImageListItem>
          );
        })}
      </ImageList>
    </div>
  );
}

export default MyLikedGif;
