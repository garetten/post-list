import './App.css';
import React, { useEffect, useMemo, useState } from 'react';
import PostList from './component/PostList';
import NewPost from './component/NewPost/NewPost';
import Select from './component/UI/select/Select';
import Input from './component/UI/input/Input';
import PostFilter from './component/PostFilter/PostFilter';
import Modal from './component/UI/modal/Modal';
import Button from './component/UI/button/Button';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';



function App() {
  const [posts,setPosts] = useState([
    {id:'1', title:'bJavaScript1',body:"Js is language1",},
    {id:'2', title:'aJavaScript2',body:"Js is language2",},
    {id:'3',title:'dJavaScript3',body:"Js is language3"},
    {id:'4',title:'cJavaScript4',body:"Js is language4",},])

    const[filter,setFilter] = useState({sort:'',query:'',})
    const [modal,setModal] = useState(false)


  async function fetchPost(){
    const response = PostService.getall();
    
    setPosts([...response]);

  }

  useEffect(()=>{
    fetchPost();
  },[])

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
      <button onClick={fetchPost}>POST</button>
      <Button onClick={()=> setModal(true)}>Создать пост</Button>
      <Modal visible={modal} setVisible={setModal}><NewPost createPost={createPost}></NewPost></Modal>
      <hr/>
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      
      <PostList removePost = {removePost} posts={sortedAndSearchedPost} title={"Список постов"}></PostList>
      

       
    </div>
  );
}

export default App;
