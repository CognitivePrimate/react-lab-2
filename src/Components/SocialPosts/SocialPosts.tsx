import {useState} from "react";

// components
import PostInList from "../PostInList/PostInList";
import PostForm from "../PostForm/PostForm";

// import {Post}  from "../../interfaces";


const SocialPosts = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [posts, setPostObjects] = useState([
        {
            title: "I can has cheezburger?",
            thought: "I haven't eaten in minutes. Please send help."
        }
    ])

    // functions to control Modal box open and close
    const openModal = () => setIsOpen(true); console.log("meow");
    // const closeModal = () => setIsOpen(false);


    return(
        <div className="wrapper">
            <header className="MainHead">Cat Chan</header>
            <button className="newThoughtButton" type="button" onClick={openModal} >Vomit Nuevo</button>
            <PostForm isOpen={isOpen}/>
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