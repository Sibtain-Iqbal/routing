import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Blog from '../pages/Blog'
function Header() {
  return (
    <div  className='header'>

        <h1>header part</h1>

        <nav>
            <ul>
                <li>
                   <Link to={'/'}>Home</Link>   </li>
                   <li>
                   <Link to={'About-Us'}>About-US</Link></li>
                   
                   <li><Link to={'Course'}>Course</Link></li>
                   <li><Link to={'Blogs'}> Blogs</Link></li>
             
                
                
            </ul>
        </nav>
      
    </div>
  )
}

export default Header
