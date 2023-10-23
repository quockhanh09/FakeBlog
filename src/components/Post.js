import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faComment,faHeart } from '@fortawesome/free-solid-svg-icons';
import './styles/Post.css';
import { timeAgo } from 'short-time-ago';

const Post = ({ props }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const increaseLikes = () => {
    setLikes(likes + 1);
  };

  const addComment = (comment) => {
    setComments([...comments, comment]);
    setCommentInput("");
  };

  return (<div className="post">
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    
    <div id="post-author">
      <img src={props.avatarURL} alt="Author Avatar" />
      <p>{props.author}</p>
    </div>
    <p><em>Posted - {timeAgo(new Date(props.timestamp))}</em></p>

    <button className="like-button" onClick={increaseLikes}>
      <FontAwesomeIcon icon={faHeart} />
      <span>{likes}</span>
    </button>

    <div className="comment-section">
      <input
        type="text"
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addComment(commentInput);
          }
        }}
        placeholder="Add a comment..."
      />
      <button onClick={() => addComment(commentInput)}><FontAwesomeIcon icon={faComment}  />Post</button>
    </div>

    <ul className="comment-list">
      {comments.map((comment, index) => (
        <li key={index} className="comment-item">
            <div id="post-author">
      <img src={props.avatarURL} alt="Author Avatar" />
      <p>{props.author}</p>
    </div>
          <p>{comment}</p>
        </li>
      ))}
    </ul>
  </div>


  )
}

export default Post;