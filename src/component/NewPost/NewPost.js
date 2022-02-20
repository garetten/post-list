import { useState } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

function NewPost({createPost,...props}){

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const changeTitle = (e)=>{
        setTitle(e.target.value);
    }
    const changeBody = (e)=>{
        setBody(e.target.value);
    }

    const addPost = (e) =>{
        e.preventDefault();
        const newPost ={
            id: Date.now(),
            title:title,
            body:body,
        };

        createPost(newPost);
        setTitle('');
        setBody('');
    }

    return(
        <form>
            <Input value={title} type = "text" placeholder = "Название поста" onChange={changeTitle}></Input>
            <Input value={body} type = "text" placeholder = "Описание поста" onChange={changeBody}></Input>
            <Button onClick={addPost}>Create post</Button>
        </form>
    );
}

export default NewPost;