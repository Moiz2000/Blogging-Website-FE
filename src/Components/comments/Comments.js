import { useState, useEffect } from "react";
import CommentForm from "../../Components/comments/CommentForm";
import Comment from "../../Components/comments/Comment";
import "../../Components/comments/comments.css";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../../Components/comments/api";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Comments = ({ commentsUrl, currentUserId }) => {
  const location = useLocation();
  const Id=location.pathname.split("/")[2];
  console.log(Id);

  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  useEffect(()=>{
    const Getcomment=async()=>{
    try{
      await axios.get("http://localhost:5000/blog/"+Id+"/comment").then((response)=>{
        console.log(response.data)
        setBackendComments(response.data);
      });
    }
    catch(err){
      window.alert("Something went wrong");
    }
    }
    Getcomment();
  },[Id])
  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      {/* <div className="comment-form-title">Write comment</div> */}
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      </div>
    </div>
  );
};

export default Comments;
