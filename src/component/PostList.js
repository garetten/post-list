import PostItem from "./PostItem/PostItem";
import "./PostList.css";

function PostList({posts, title,removePost}){
    
    if(!posts.length){
      return(<h2>Посты не найдены</h2>);

    }
    return(<div className="post_list">
            <h1 className="list_title">{title}</h1>
        {
        posts.map((post,index)=>{
          return(

            <PostItem key = {post.id} post={post} index={index+1} removePost={removePost}></PostItem>
            );
        })
      }
      </div>);
}


export default PostList;