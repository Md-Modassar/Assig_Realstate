import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillYoutube,AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'

const socialLinks=[
  {
    path:"https://www.youtube.com/@MdModassar-vq5rl",
    icon:<AiFillYoutube className='group-hover:text-white w-4 h-5'/>

  },{
    path:"https://github.com/Md-Modassar",
    icon:<AiFillGithub className='group-hover:text-white w-4 h-5'/>
  },{
    path:"https://www.instagram.com",
    icon:<AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>
  }
];
const quickLink01=[
  {path:"/home",
    display:'Home',  
  },{
    path:'/',
    display:"Aout Us",
  },
  {
    path:"/services",
    display:"Services",
  },
  {
    path:'/',
    display:'Blog'
  }
];
export default function Footer() {
  return (
    <>
    <hr/>
    <footer className='pb-16 pt-10 'style={{backgroundColor:"gray"}} >
   <div className='container'>
    <div className='flex justify-beween flex-col md:flex-row flex-wrap gap-[30px] '>
      <div>
        
        <p className='text-[16px] leading-7 font-[400] text-textColor'>Modassar</p>
      
      <div className='flex items-center gap-3 mt-4 '>
        {socialLinks.map((link,index)=><Link to={link.path} key={index} className='w-9 h-9 border-solid broder-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>{link.icon}</Link>)}
      </div>
      </div>
      <div style={{marginLeft:"40%"}}>
        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
          Quick Link
        </h2>
        <ul>
          {quickLink01.map((item,index)=><li key={index} className='mb-4'><Link to={item.path} className='text-{16px} leading-7 font-[400] text-textColor'>{item.display}</Link></li>)}
        </ul>
      </div>
    </div>
   </div>
 </footer>
    <div>
        <div className="container">
        
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">

      </Link>
      <span className="text-muted">© 2023 Real Estate, Inc</span>
    </div>
  </footer>
</div>
    </div>
    </>
  )
}
