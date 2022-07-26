import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/button/Button";
import cl from"./PostItem.module.css";

function PostItem(props){
    const navigate = useNavigate();
    
    function openPost(){
        navigate(`/post/${props.post.id}`)
    }
    return(
        <div className={cl.post}>
            <div>
                <div className="post_title">{props.post.id} . {props.post.title}</div>
                <div className="post_body">{props.post.body}</div>
            </div>
            <Button className="post_button" onClick={openPost}>Open</Button>
            <Button className="post_button" onClick={()=>{props.removePost(props.post);}}>delete</Button>
        </div>
    );
}

export default PostItem;