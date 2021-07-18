import TrashIcon from "../../Icons/delete_black_24dp.svg";
import Up from "../../Icons/up.svg";
import Down from "../../Icons/down.svg";


// interfaces
import {Post}  from "../../interfaces";

interface Props {
    post: Post
    onDelete: () => void;
    upVote: () => void;
    downVote: () => void;
}


const PostInList = ({post, onDelete, upVote, downVote}: Props) => {

    return(
        <div className="post">
            <div className="postLeft">
                <h3 className="title">{post.title}</h3>
                <p className="thought">{post.thought}</p>
            </div>
            <div className="postRight">
                <img className="trashIcon" src={Up} onClick={upVote} alt="upvote"/>
                <img className="trashIcon" src={Down} onClick={downVote} alt="downvote"/>
                <img className="trashIcon" src={TrashIcon} onClick={onDelete} alt="trash-icon"/>    
            </div>
             
        </div>
    )
}

// TODO:
// add upvote/downvote functionality that physically moves posts up or down in list
export default PostInList;