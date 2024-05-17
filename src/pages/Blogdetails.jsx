import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Common/Header'
import { blogs } from './Blogs'
function Blogdetails() {
const uselocation = useLocation()
let currentid = uselocation.pathname.split('/')[2]
let currentData = blogs.filter((v,i)=> v.id == currentid)[0]
console.log(currentData);

  return (
    <div>
       <Header/>  
       <h1>{currentData.id}</h1>
       <h1>{currentData.title}</h1>
      
    </div>
  )
}

export default Blogdetails
