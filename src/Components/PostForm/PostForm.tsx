import { ChangeEvent, FormEvent, useState } from "react";
import { Post } from "../../interfaces";

import XIcon from "../../Icons/cancel_black_24dp.svg";



// for ReactModal
import React from "react";
import Modal from "react-modal";
import ReactDom from "react-dom";
import ReactModal from "react-modal";
// Modal.setAppElement('#PostInputForm');

interface Props {
    // openModal: () => void;
    // closeModal: () => void;
    isOpen: boolean;
}



const PostForm = ({isOpen}: Props) => {
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("");
    // Modal.setAppElement('#PostInputForm');

    // const [modalIsOpen, setIsOpen] = useState(false);

    // const openModal = () => setIsOpen(true);
    const closeModal = () => isOpen = false;
    // TEST
    const test = "modalBodyOpen";

    // END TEST

    const newTitle = (e: any) => setTitle(e.target.value)
    const newThought = (e: any) => setThought(e.target.value)

    return(
        <ReactModal overlayClassName="modalOverlay"  bodyOpenClassName="null"  className="modalMain" isOpen={isOpen}>
            <form id="PostInputForm">
                <div className="formTitleXWrapper">
                    <label htmlFor="title">Title</label>
                    <img className="xIcon" src={XIcon} onClick={closeModal} alt="trash-icon"/>
                </div>
                
                <input type="text" name="title" id="title" value={title} onChange={newTitle}/><br/>
                <label htmlFor="thought">Thought</label><br/>
                <input type="textArea" name="thought" id="thought" value={thought} onChange={newThought}/><br/>
                <button type="submit">Word Vomit</button>
            </form>
        </ReactModal>
        
    )
}


export default PostForm;