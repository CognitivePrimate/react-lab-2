import { FormEvent, useState } from "react";
import { Post } from "../../interfaces";

import XIcon from "../../Icons/cancel_black_24dp.svg";

interface Props {
    className: string;
    onClose: () => void;
    onSubmit: (post: Post) => void;
}



const PostForm = ({className, onClose, onSubmit}: Props) => {
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("");

    // handles submit event with Post object key values
    const handlesubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit({
            title,
            thought,
            votes: 0
        });
        onClose();
        setTitle("");
        setThought("");
    }


    // END TEST

    const newTitle = (e: any) => setTitle(e.target.value)
    const newThought = (e: any) => setThought(e.target.value)

    return(
            <form className={`PostInputForm ${className}`} >
                <div className="formTitleXWrapper">
                    <label htmlFor="title">Title</label>
                    <img className="xIcon" src={XIcon} onClick={onClose} alt="trash-icon"/>
                </div>
                
                <input type="text" name="title" id="title" value={title} onChange={newTitle}/><br/>
                <label htmlFor="thought">Thought</label><br/>
                <input type="textArea" name="thought" id="thought" value={thought} onChange={newThought}/><br/>
                <button id="formSubmitButton" type="submit" onClick={handlesubmit}>Word Vomit</button>
            </form>
        
    )
}


export default PostForm;