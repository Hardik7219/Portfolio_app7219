import React from 'react'
import '/src/App.css'
function Skill({detail={img:"https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle.png",con:"JavaScript"}}) {
  return (
    <>
        <div className='det bg-amber-50 rounded-lg shadow-lg  hover:scale-105 hover:bg-amber-100 transition-all duration-300'>
                <div className='skill-img  hover:border-6 
                border-orange-700  ' style={{backgroundImage:`url(${detail.img})`,backgroundSize:'cover',backgroundPosition:'center',borderRadius:'10%'}}></div>
                <p className=' text-cyan-800 text-center font-extrabold'>{detail.con}</p>
           
        </div>
    </>
  )
}

export default Skill
