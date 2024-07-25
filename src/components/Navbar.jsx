import React, {  useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    const [extendNavbar,setExtendNAvbar] = useState (false)
    
  return (
    <div>
          <div className='w-full bg-gradient '>
        <nav className=' mx-auto flex justify-between items-center py-2 px-7  lg:px-10 relative  h-24  '>
            <div className='flex items-center justify-center gap-3'>
            <img src="http://logos-download.com/wp-content/uploads/2016/11/EA_logo_black.png" alt="" className='w-16   '/>
            <h1 className='font-bold font-serif text-3xl uppercase'>Avaya</h1>
            </div>
        <div>
            <ul className={`lg:gap-6 flex text-2xl font-semibold lg:static flex flex-col lg:flex-row absolute items-center gap-2 text-xl duration-500  px-3 py-2  lg:text-black text-white  ${extendNavbar ? "top-32 right-4" : "top-32 right-[-200px]"}`}>
                <li className='font-semibold cursor-pointer hover:text-white'>Home</li>
                <li className='font-semibold cursor-pointer hover:text-white'>About</li>
                <li className='font-semibold cursor-pointer hover:text-white'>Stories</li>
                <li className='font-semibold cursor-pointer hover:text-white'>Login</li>
                <li className='font-semibold cursor-pointer hover:text-white'>Signup</li>
            </ul>
            <div className='cursor-pointer lg:hidden' onClick={() => {setExtendNAvbar(open => !open)}}>
                {
                    extendNavbar ? <CloseIcon/> : <MenuIcon/>
                }
            </div>
        </div>
        </nav>
    </div>
    </div>
       
  )
}

export default Navbar