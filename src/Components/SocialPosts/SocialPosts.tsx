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

    const handleSort = (index: number) => {

        const voteBeingSorted: number = posts[index].votes;
        const tempIndex: number = index-1;
        
        // prevent error if index < 0
            // if (voteBeingSorted > 0) {}
        // const sort = (): any => {
            
            console.log(`PostTempIndex ${tempIndex}`);
            const voteBeingComparedTo: number = posts[tempIndex].votes;
            console.log(`voteBeingSorted: ${voteBeingSorted}`);
            console.log(`voteBeingComparedTo: ${voteBeingComparedTo}`)
            // return voteBeingSorted > voteBeingComparedTo && tempIndex > 0 ? handleShift(index) : null;
            return (voteBeingSorted && voteBeingComparedTo && tempIndex) > 0 ? handleShift(index) : null;

        // };

        // return tempIndex > 0 ? sort() : null;
        
        

    }
    // move function --- fix type (back to number?)
    const handleShift = (index: any) => {
        setPostObjects(prevPosts => [
            // ...prevPosts.slice(0, index),
            // ...prevPosts.slice(index-1)
            // BRITTANY TEST
            ...prevPosts.slice(0, index-1),
            ...prevPosts.slice(index, index+1),
            ...prevPosts.slice(index-1, index),
            ...prevPosts.slice(index+1)
            // END BRITTANY TEST

        ]);
    }


    // handler functions
    const handleUpVote = (index: number) => {posts[index].votes++; handleSort(index); console.log(`Posts[index].votes: ${posts[index].votes}`)};
    const handleDownVote = (index: number) => {posts[index].votes--; handleSort(index); console.log(posts[index].votes)};

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