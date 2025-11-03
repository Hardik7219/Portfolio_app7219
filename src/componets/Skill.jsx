import React from 'react'

function Skill({detail={img:"https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle.png",con:"JavaScript"}}) {
  return (
    <>
        <div className='h-100 w-240 bg-amber-50 rounded-lg shadow-lg  hover:scale-105 hover:bg-amber-100 transition-all duration-300'>
                <div className='skill-img h-60 w-60 mx-auto my-4 hover:border-6 
                border-orange-700  ' style={{backgroundImage:`url(${detail.img})`,backgroundSize:'cover',backgroundPosition:'center',borderRadius:'10%'}}></div>
                <h2 className='text-6xl text-cyan-800 text-center font-extrabold'>{detail.con}</h2>
           
        </div>
    </>
  )
}

export default Skill
