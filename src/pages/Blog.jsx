import React from 'react'
import Header from '../Common/Header'
import { blogs } from './Blogs'
import { Link } from 'react-router-dom'

function Blog() {
    let files = blogs.map((v,i)=>{
        return(
            <div className='blog-items' key={i}>
                <h3> {v.title}</h3>
                <p>
                    { v.body }
                </p>
                <button><Link to={`/blog/${v.id}`}> rEAD MORE </Link></button>
            </div>
        )
 
    })
  return (
    <div>
        <Header/>
        <h1>This is blog page</h1>
       <div className='container'>
        {files  }
        
       </div>
      
    </div>
  )
}

export default Blog
