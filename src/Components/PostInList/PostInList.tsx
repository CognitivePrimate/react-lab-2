import TrashIcon from "../../Icons/delete_black_24dp.svg";

// interfaces
import {Post}  from "../../interfaces";

interface Props {
    post: Post
}


const PostInList = ({post}: Props) => {


    // functions
    const HandleDeletePost = () => {
        console.log("delete test");
    }
    
    return(
        <div className="post">
            <div className="postLeft">
                <h3 className="title">{post.title}</h3>
                <p className="thought">{post.thought}</p>
            </div>
            <img className="trashIcon" src={TrashIcon} onClick={HandleDeletePost} alt="trash-icon"/> 
        </div>
    )
}

// TODO:
// add upvote/downvote functionality that physically moves posts up or down in list
export default PostInList;