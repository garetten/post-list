import { useMemo} from "react";

export const useSortedPosts = (posts,sort) =>{
    const sortedPost = useMemo(()=>{
        if(sort){
          return [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]));
        }
        return posts;
      },[sort,posts]);
      
    return sortedPost;
}

export const usePosts = (posts,sort,query) =>{
    const sortedPost = useSortedPosts(posts,sort)
    const sortedAndSearchedPost = useMemo(()=>{
        return sortedPost.filter(post=>post.title.toLowerCase().includes(query.toLowerCase()))
      },[sortedPost,query]);
    return sortedAndSearchedPost;
}