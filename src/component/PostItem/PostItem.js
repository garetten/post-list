import React from "react";
import Button from "../UI/button/Button";
import cl from"./PostItem.module.css";

function PostItem(props){
    return(
        <div className={cl.post}>
            <div>
                <div className="post_title">{props.index} . {props.post.title}</div>
                <div className="post_body">{props.post.body}</div>
            </div>
            <Button className="post_button" onClick={()=>{props.removePost(props.post);}}>delete</Button>
        </div>
    );
}

export default PostItem;