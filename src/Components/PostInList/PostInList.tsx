

// icons for right side of post
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
                <img className="icon" src={Up} onClick={upVote} alt="upvote"/>
                {/* span doesn't update until votes > votes of post above. WHY?! */}
                <span>{post.votes}</span>
                <img className="icon" src={Down} onClick={downVote} alt="downvote"/>
                <img className="icon" src={TrashIcon} onClick={onDelete} alt="trash-icon"/>    
            </div>
             
        </div>
    )
}

// TODO:
// add upvote/downvote functionality that physically moves posts up or down in list
export default PostInList;