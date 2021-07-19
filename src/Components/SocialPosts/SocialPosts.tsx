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
            title: "Birbs: Real or no?",
            thought: "Every day, birbs we cannot reach through invisible barrier. Does anyone else see them? Mocks us, they do.",
            votes: 0
        },
        {
            title: "Hoomans tortures us.",
            thought: "Today hooman makes tuna. Does not share. I will pee in shoes. Tunedies will be ours.",
            votes: 0
        },
        {
            title: "Birbs: a Conspiracy by Big Force Field",
            thought: "Birbs are not real. Have you ever seen one not behind the invisible forcefields? Hoomans perpetuate bird myth as a tool of social control. No war but cat war!",
            votes: 0
        }
    ])

    
    
    // handler functions
    const handleHidden = () => {
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
        let tempIndex: number = index-1;

        //making sure index doesn't try to access object/number that doesn't exist on upvote
        tempIndex < 0 ? tempIndex = 0 : tempIndex = index-1;

        const voteBeingComparedTo: number = posts[tempIndex].votes;
        console.log(`voteBeingSorted: ${voteBeingSorted}`);
        console.log(`voteBeingComparedTo: ${voteBeingComparedTo}`)            
        
        // compares number of votes of clicked post to the post immediately above and sorting upward respective to vote count
        // refactor to compare (while loop?) next index all the way up
        return voteBeingSorted > voteBeingComparedTo ? handleShiftUp(index) : null;
            
    }

    // handles moving objects through array based on number of votes. is called by handleSort() function
    const handleShiftUp = (index: number) => {
        setPostObjects(prevPosts => [
            // Thank Brittany for below 
            ...prevPosts.slice(0, index-1),
            ...prevPosts.slice(index, index+1),
            ...prevPosts.slice(index-1, index),
            ...prevPosts.slice(index+1)

        ]);
    }

    // const handleShiftDown = (index: any) => {
    //     setPostObjects(prevPosts => [
    //         // ...prevPosts.slice(index-1, 0),
    //         // ...prevPosts.slice(index+1, index),
    //         // ...prevPosts.slice(index, index-1),
    //         // ...prevPosts.slice(index-1)
            
    //         // TAKE TWO
    //         // ...prevPosts.slice(index+1),
    //         // ...prevPosts.slice(index-1, index),
    //         // ...prevPosts.slice(index, index+1),
    //         // ...prevPosts.slice(0, index-1),

    //         // TAKE THREE
    //         ...prevPosts.slice(0, index+1),
    //         ...prevPosts.slice(index, index-1),
    //         ...prevPosts.slice(index+1, index),
    //         ...prevPosts.slice(index-1)

    //     ]);

    // }


    // handler functions
    const handleUpVote = (index: number) => {posts[index].votes++; handleSort(index)};
    const handleDownVote = (index: number) => {posts[index].votes--; handleSort(index)};

    // VOTE SECTION END

    return(
        <div className="wrapper">
            <header className="MainHead">Cat Chan</header>
            <button className="newThoughtButton" type="button" onClick={handleHidden}>Vomit Nuevo</button>
            <PostForm 
                className={hidden} 
                onClose={handleHidden}
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