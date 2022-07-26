import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import Loader from '../component/UI/loader/Loader';
import {useFetching} from '../hooks/useFetching'
import './postId.css';

export default function PostId() {

  const params = useParams();
  const [post,setPost] = useState({});
  const [comments,setComments] = useState([]);
  const [fetchPostById,isLoading,error] = useFetching(async()=>{
    const response = await PostService.getById(params.id);
    setPost(response);
  });
  const [fetchComments,isComLoading,comError] = useFetching(async()=>{
    const response = await PostService.getCommentsById(params.id)
    setComments(response);
  })
  
  useEffect(()=>{
    fetchPostById(params.id);
    fetchComments(params.id);
  },[])

  return (
    <div className='post-container'>
        {isLoading
        ? <Loader/>
        :<><h2 className='post__title'>{post.id}.   {post.title}</h2>
        <div className='post__body'>{post.body}</div>
        </>
      }
        {isComLoading
        ? <Loader/>
        :<div>
          {
            comments.map((comm,index)=>
              <div className='comment' key={index}>
                <h5 className='comment__email'>{comm.email}</h5>
                <div className='comment__body'>{comm.body}</div>
              </div>
            )
          }
        </div>
      }
    </div>
  )
}
