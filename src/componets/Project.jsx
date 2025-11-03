import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
function Project(props) {
        useEffect(()=>{Aos.init()},[])
    
    function pageLink(e)
    {
        window.open(e, "_blank");

    }
  return (
    <>
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="300" className='h-84 m-4 w-90 border-6  bg-black 
        bg-gray-950-500 gap-4 rounded-lg flex flex-col justify-center items-center'>
            <div onClick={()=>pageLink(props.link)} 
            className='group hover:cursor-pointer h-60 w-80 border-4 bg-gray-500 rounded-2xl hover:bg-gray-600 border-b-blue-950-300 flex items-center justify-center'>
                <div  className='h-30 w-30 invisible group-hover:visible bg-[url("https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png")]
                bg-cover'></div>
            </div>
            <div className='w-80 rounded-2xl m-1 flex justify-center items-center h-30 border-4 text-3xl
             text-wrap overflow-hidden font-mono text-center bg-white'>{props.proName}</div>
        </div>
    </>
  )
}

export default Project
