import {useState} from "react";

// components
import PostInList from "../PostInList/PostInList";
import PostForm from "../PostForm/PostForm";

import {Post}  from "../../interfaces";


const SocialPosts = () => {
    // States
    const [hidden, setHidden] = useState("hidden");
    const [posts, setPostObjects] = useState([
        {
            title: "I can has cheezburger?",
            thought: "I haven't eaten in minutes. Please send help.",
            votes: 0
        },
        {
            title: "Test 2",
            thought: "I haven't eaten in minutes. Please send help.",
            votes: 0
        },
        {
            title: "Test 3",
            thought: "I haven't eaten in minutes. Please send help.",
            votes: 0
        },
        {
            title: "Test 4",
            thought: "I haven't eaten in minutes. Please send help.",
            votes: 0
        }
    ])

    
    
    
    function handleHidden(){
        hidden === "hidden" ? setHidden("") : setHidden("hidden");
        console.log(hidden);
    }

    const handleAdd = (post:Post) => {
        setPostObjects(prevPosts => [
            ...prevPosts,
            post
        ])
    }

    const HandleDeletePost = (index: number) => {
        setPostObjects(prevPosts => [
            ...prevPosts.slice(0, index),
            ...prevPosts.slice(index+1)
        ]);
    }

    // VOTE SECTION
    // sort and move functions
    // const sort = (index: number) => {
    //     return posts[index].votes > posts[index-1].votes ? shift(index) : null;
    // }

    const sort = (index: number) => {
        const voteBeingSorted: number = posts[index].votes;
        console.log(`preTempIndex ${index}`);
        const tempIndex: number = index-1;
        console.log(`PostTempIndex ${tempIndex}`);
        const voteBeingComparedTo: number = posts[tempIndex].votes;
        console.log(`voteBeingSorted: ${voteBeingSorted}`);
        console.log(`voteBeingComparedTo: ${voteBeingComparedTo}`)
        return voteBeingSorted > voteBeingComparedTo ? shift(index) : null;

    }
    // move function
    const shift = (index: number) => {
        setPostObjects(prevPosts => [
            ...prevPosts.slice(index),
            ...prevPosts.slice(index-1)
        ]);
    }


    // handler functions
    const handleUpVote = (index: number) => {posts[index].votes++; sort(index); console.log(posts[index].votes)};
    const handleDownVote = (index: number) => {posts[index].votes--; sort(index); console.log(posts[index].votes)};

    // VOTE SECTION END

    return(
        <div className="wrapper">
            <header className="MainHead">Cat Chan</header>
            <button className="newThoughtButton" type="button" onClick={handleHidden}>Vomit Nuevo</button>
            <PostForm 
                className={hidden} 
                handleHidden={handleHidden}
                onSubmit = {handleAdd} 
            />
            <div className="postWrapper">
                {posts.map((post, index) => {
                    return <PostInList
                                key={`${post.title}-${index}`}
                                post={post}
                                onDelete={() => HandleDeletePost(index)}
                                upVote={() => handleUpVote(index)}
                                downVote={() => handleDownVote(index)}
                            />
                })}
            </div>

        </div>
    )
}


export default SocialPosts;