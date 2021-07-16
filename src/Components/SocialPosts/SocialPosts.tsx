import {useState} from "react";
// components
import PostInList from "../PostInList/PostInList";

// import {Post}  from "../../interfaces";

const SocialPosts = () => {
    const [posts, setPostObjects] = useState([
        {
            title: "I can has cheezburger?",
            thought: "I haven't eaten in minutes. Please send help."
        }
    ])





    return(
        <div className="wrapper">
            <header className="MainHead">Cat Chan</header>
            <button className="newThoughtButton" type="button">Vomit Nuevo</button>
            <div className="postWrapper">
                {posts.map((post, index) => {
                    return <PostInList
                                key={`${post.title}-${index}`}
                                post={post}
                            />
                })}
            </div>

        </div>
    )
}


export default SocialPosts;