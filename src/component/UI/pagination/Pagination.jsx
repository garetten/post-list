import React from 'react';
import { useMemo } from 'react';

export default function Pagination({totalPages,page,setPage}) {
    let pagesArray = useMemo(()=>{
        let arr= []
        for(let i = 0;i<totalPages;i++){
          arr.push(i+1);
        }
        return arr;
      },[totalPages])
  return (
    <div className='pagination-arr'>
    {
      pagesArray.map((p)=>{
        
        return <span 
        onClick={()=>setPage(p)}
        className={page===p ? "page page_current":"page"} 
        key={p}>
          {p}
        </span>
      })
      
    }
  </div>  
  )
}
