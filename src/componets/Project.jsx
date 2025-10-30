import React from 'react'

function Project(props) {
    function pageLink(e)
    {
        window.open(e, "_blank");

    }
  return (
    <>
        <div className='h-100 w-100 border-6 border-gray-900 bg-gray-950-500 gap-4 rounded-lg flex flex-col justify-center items-center'>
            <div onClick={()=>pageLink(props.link)} 
            className='group hover:cursor-pointer h-70 w-90 border-4 bg-gray-500 rounded-2xl hover:bg-gray-600 border-b-blue-950-300 flex items-center justify-center'>
                <div  className='h-30 w-30 invisible group-hover:visible bg-[url("https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png")]
                bg-cover'></div>
            </div>
            <div className='w-90 h-30 border-4 text-4xl text-wrap overflow-hidden font-mono text-white text-center bg-black border-gray-900'>{props.proName}</div>
        </div>
    </>
  )
}

export default Project
