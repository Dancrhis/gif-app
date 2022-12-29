import MyLikedGif from "components/MyLikedGif"
import {LoginContext} from "context/authentication"
import { useContext } from "react"
import { Redirect } from "react-router-dom"

function MyFavoritesPage(){
    const {isLoggedIn} = useContext(LoginContext)
    if(!isLoggedIn) return <Redirect path="/"/>
    return (
        <div>
            <MyLikedGif/>
        </div>
    )

}
export default MyFavoritesPage