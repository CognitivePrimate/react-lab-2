import { FormEvent, useState } from "react";
import { Post } from "../../interfaces";

import XIcon from "../../Icons/cancel_black_24dp.svg";



// for ReactModal
import React from "react";
// import Modal from "react-modal";
// import ReactDom from "react-dom";
// import ReactModal from "react-modal";

interface Props {
    // openModal: () => void;
    // closeModal: () => void;
    className: string;
    handleHidden: () => void;
    onSubmit: (post: Post) => void;

}



const PostForm = ({className, handleHidden, onSubmit}: Props) => {
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
        handleHidden();
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
                    <img className="xIcon" src={XIcon} onClick={handleHidden} alt="trash-icon"/>
                </div>
                
                <input type="text" name="title" id="title" value={title} onChange={newTitle}/><br/>
                <label htmlFor="thought">Thought</label><br/>
                <input type="textArea" name="thought" id="thought" value={thought} onChange={newThought}/><br/>
                <button id="formSubmitButton" type="submit" onClick={handlesubmit}>Word Vomit</button>
            </form>
        
    )
}


export default PostForm;