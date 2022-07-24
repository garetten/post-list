import React, { useEffect, useState } from 'react';
import PostList from '../component/PostList';
import NewPost from '../component/NewPost/NewPost';
import PostFilter from '../component/PostFilter/PostFilter';
import Modal from '../component/UI/modal/Modal';
import Button from '../component/UI/button/Button';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../component/UI/loader/Loader';
import { getPageCount } from '../utils/pages';
import Pagination from '../component/UI/pagination/Pagination';



function Home() {
  const [posts,setPosts] = useState([]);
  const [filter,setFilter] = useState({sort:'',query:'',});
  const [modal,setModal] = useState(false);
  const [limit,setLimit] = useState(10);
  const [page,setPage] = useState(1);
  const [totalPages,setTotalPages] = useState(0);
  const [isPostLoading,setIsPostLoading] = useState(false);

  async function fetchPost(){
    setIsPostLoading(true);
    const response = await PostService.getall(limit,page);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount,limit));
    setPosts([...response.data]);
    setIsPostLoading(false);

  }

  useEffect(()=>{
    fetchPost();
  },[page])

    const sortedAndSearchedPost = usePosts(posts,filter.sort,filter.query);
    const createPost =(newPost)=>{
        setPosts([...posts,newPost]);
        setModal(false);
    }
    const removePost = (post)=>{
      setPosts(posts.filter(p=>{return p.id !== post.id}))
    }

    


  return (
    <div className="App">
      <Button onClick={()=> setModal(true)}>Создать пост</Button>
      <Modal visible={modal} setVisible={setModal}><NewPost createPost={createPost}></NewPost></Modal>
      <hr/>
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      {
        isPostLoading
        ? <Loader></Loader>
        : <PostList removePost = {removePost} posts={sortedAndSearchedPost} title={"Список постов"}></PostList>
      }   

      <Pagination page={page} setPage={setPage} totalPages={totalPages}></Pagination>
       
    </div>
  );
}

export default Home;