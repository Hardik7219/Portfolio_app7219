import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '/src/App.css'
function Project(props) {
        useEffect(()=>{Aos.init()},[])
    
    function pageLink(e)
    {
        window.open(e, "_blank");

    }
  return (
    <>
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="300" className='pro border-2  bg-black 
        bg-gray-950 m-2 rounded-md flex flex-col justify-center items-center'>
            <div onClick={()=>pageLink(props.link)} 
            className='link2 group hover:cursor-pointer border-1 bg-gray-500 rounded-md hover:bg-gray-600 border-b-blue-950 flex items-center justify-center'>
                <div  className=' invisible group-hover:visible h-20 w-20 bg-[url("https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png")]
                bg-cover'></div>
            </div>
            <div className='title rounded-md m-1 flex justify-center items-center  border-1 text-3xl
             text-wrap overflow-hidden font-mono text-center bg-white'>{props.proName}</div>
        </div>
    </>
  )
}

export default Project
