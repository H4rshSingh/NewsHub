import React, { useState } from 'react'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Navbar(props) {
    const [active, setActive] = useState(false)
    function showMenu() {
        setActive(!active);
    }

    return (
        <div className={`${props.mode === 'dark' ? 'bg-[#1A1A2E] border-b border-gray-600' : 'bg-[#FFF8F3] border-b border-amber-400'} w-full ${props.mode === 'dark' ? 'text-white' : 'text-black'} flex justify-between p-4 items-center fixed z-10`}>
            <div className="text-2xl font-bold text-center flex items-center">
                <img className='' src={logo} width="40px" alt="NewsHub" />
                <span className='pl-2 text-4xl'>NewsHub</span>
            </div>

            <nav>
                <div className="absolute right-6 lg:hidden top-6 scale-150">
                    <MenuIcon onClick={showMenu} className='scale-150 cursor-pointer' />
                </div>
                <ul className={`hidden lg:flex gap-4 p-4 text-sm uppercase font-medium ${props.mode === 'dark' ? 'bg-white/10' : 'bg-gray-400/10'} rounded-lg`}>
                    <li className='hover:text-red-600 text-purple-500 font-bold mr-6' ><Link aria-current="page" to='/general'>Home</Link></li>
                    <li className='hover:text-red-600'><Link to='/business'>Business</Link></li>
                    <li className='hover:text-red-600'><Link to='/entertainment'>Entertainment</Link></li>
                    <li className='hover:text-red-600'><Link to='/general'>General</Link></li>
                    <li className='hover:text-red-600'><Link to='/health'>Health</Link></li>
                    <li className='hover:text-red-600'><Link to='/science'>Science</Link></li>
                    <li className='hover:text-red-600'><Link to='/sports'>Sports</Link></li>
                    <li className='hover:text-red-600'><Link to='/technology'>Technology</Link></li>
                    <label htmlFor="theme" className="inline-flex relative items-center cursor-pointer ml-4">
                        <input type="checkbox" value="" id="theme" className="sr-only peer" onClick={props.toggleMode} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className={`ml-3 text-sm font-medium hover:text-red-600 text-${props.mode === 'dark' ? 'white' : 'black'}`}>Light Theme</span>
                    </label>
                </ul>


                <div>
                    <ul className={active ? `flex-col flex items-center fixed inset-0 left-1/3 uppercase backdrop-blur-lg  ${props.mode === 'dark' ? 'bg-[#1A1A2E]/40' : 'bg-[#F9F3F3]/40'} gap-8 justify-center p-8 font-medium lg:hidden z-10` : 'hidden'}>
                        <Close onClick={showMenu} className='cursor-pointer hover:text-red-600' />
                        <li className='hover:text-red-600 text-purple-500 font-bold' ><Link aria-current="page" to='/'>Home</Link></li>
                        <li className='hover:text-red-600'><Link to='/business'>Business</Link></li>
                        <li className='hover:text-red-600'><Link to='/entertainment'>Entertainment</Link></li>
                        <li className='hover:text-red-600'><Link to='/general'>General</Link></li>
                        <li className='hover:text-red-600'><Link to='/health'>Health</Link></li>
                        <li className='hover:text-red-600'><Link to='/science'>Science</Link></li>
                        <li className='hover:text-red-600'><Link to='/sports'>Sports</Link></li>
                        <li className='hover:text-red-600'><Link to='/technology'>Technology</Link></li>
                        <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" value="" id="default-toggle" className="sr-only peer" onClick={props.toggleMode} />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className={`ml-3 hover:text-red-600 text-${props.mode === 'dark' ? 'white' : 'black'}`}>Light Theme</span>
                        </label>
                        <div className='inline-block space-x-4'>
                            <a href="https://github.com/H4rshSingh"><GitHubIcon /></a>
                            <a href="https://twitter.com/H4rshSingh"><LinkedInIcon /></a>
                            <a href="https://www.linkedin.com/in/h4rshsingh"><TwitterIcon /></a>
                        </div>

                    </ul>
                </div>
            </nav>


        </div >
    )
}

export default Navbar;
