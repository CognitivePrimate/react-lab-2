import { ChangeEvent, FormEvent, useState } from "react";
import { Post } from "../../interfaces";
import ReactModal from "react-modal";

interface Props {
    
}

const PostForm = () => {
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("");





    return(
        <ReactModal isOpen={false}>
            <form>

                <input type="text" name="title" id="title" value={title}></input>


            </form>
        </ReactModal>
        
    )
}


// export default PostForm;