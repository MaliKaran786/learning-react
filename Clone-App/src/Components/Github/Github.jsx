import React from 'react'
import { useState,useEffect } from 'react'

function Github() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch(`https://api.github.com/users/hiteshchoudhary`)
    .then((res)=> res.json())
    .then(data => setData(data))
  },[])
  return (
    <div className='text-center m-4 text-white bg-gray-800 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt='git_pic'/>
     </div>
  )
}

export default Github