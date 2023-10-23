import React from "react";

import { authentication } from "../services/firebase-config";
import './styles/NewPost.css';
import anonymous from '../images/default.png';
import { addPost } from "../services/firebase";



function magic(input) {
    input = input.replace(/&/g, '&amp;');
    input = input.replace(/</g, '&lt;');
    input = input.replace(/>/g, '&gt;');
    return input;
}

const NewPost = ({ onUpdate }) => {

    const handleUpdate = (e) => {
        e.preventDefault();

        onUpdate({
            id: `${authentication.currentUser.uid}-${Math.floor(100000 + Math.random() * 900000)}`,
            title: e.target[0].value,
            description: magic(e.target[1].value),
            avatarURL: authentication.currentUser.photoURL ? authentication.currentUser.photoURL : anonymous,
            timestamp: new Date().toISOString(),
            author: authentication.currentUser.displayName ? authentication.currentUser.displayName : 'Demo User'
        });

        addPost({
            id: `${authentication.currentUser.uid}-${Math.floor(100000 + Math.random() * 900000)}`,
            title: magic(e.target[0].value),
            description: magic(e.target[1].value),
            avatarURL: authentication.currentUser.photoURL ? authentication.currentUser.photoURL : anonymous,
            timestamp: new Date().toISOString(),
            author: authentication.currentUser.displayName ? authentication.currentUser.displayName : 'Demo User'
        })

    }
    // const [imageFile, setImageFile] = useState(null);
    // const handleImageUpload = (e) => {
    //     const file = e.target.files[0];
    //     setImageFile(file);
    // };
    return <div id="newpost">
        <h1>What is on your <span>mind</span>?</h1>
        <form onSubmit={handleUpdate}>
            <textarea className="form-primary" placeholder="Title your post!"></textarea>
            {/* <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="image-upload"
            /> */}
            <textarea className="form-secondary" placeholder="Then tell everyone what you're thinking..."></textarea> 
           
            <button type="submit">Post to your Public Wall!</button>
        </form>

    </div>
}

export default NewPost;