import React from 'react'
import './App.css'
import logo from './assets/logo.jpeg'
import Typing from './componets/Typing'
import { useEffect,useRef } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Skill from './componets/Skill'
import Project from './componets/Project'

let skillImg={
	js:'https://icon.icepanel.io/Technology/svg/JavaScript.svg',
	py:'https://icon.icepanel.io/Technology/svg/Python.svg',
	c:'https://icon.icepanel.io/Technology/svg/C.svg',
	java:'https://icon.icepanel.io/Technology/svg/Java.svg',
	react1:'https://icon.icepanel.io/Technology/svg/React.svg',
	htcss:'https://icon.icepanel.io/Technology/svg/HTML5.svg',
	tai:'https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg',
	cpp:'https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg'

}
function App() {
	let headerRef1=useRef(null);
	let homeRef2=useRef(null);
	let [detail1,setDetail1]=React.useState("");
	useEffect(()=>{Aos.init()},[])
	const dis=(e)=>{
	  	document.querySelectorAll(".skill-col").forEach((el) => el.classList.remove("blu"));
  		e.classList.add("blu");
		var h={}
		if(e.classList.contains("skill-1")){
			h={
				img:skillImg.py,
				con:"PYTHON PROGRAMMING"
			};
		}
		else if(e.classList.contains("skill-2")){
			 h={
				img:skillImg.c,
				con:"C PROGRAMMING"
			};
		}
		else if(e.classList.contains("skill-3")){
			 h={
				img:skillImg.js,
				con:"JAVASCRIPT PROGRAMMING"
			};
		}
		else if(e.classList.contains("skill-4")){
			 h={
				img:skillImg.react1,
				con:"REACT PROGRAMMING"
			};
		}
		else if(e.classList.contains("skill-5")){
			h={
				img:skillImg.cpp,
				con:"C++ PROGRAMMING"
			};
		}
		else if(e.classList.contains("skill-6")){
			 h={
				img:skillImg.htcss,
				con:"HTML & CSS"
			};
		}
		else if(e.classList.contains("skill-7")){
			 h={
				img:skillImg.tai,
				con:"TAILWIND CSS"
			};
		}
		else if(e.classList.contains("skill-8")){
			h={
				img:skillImg.java,
				con:"JAVA PROGRAMMING"
			};
		}
		setDetail1(h)
	}

	useEffect(() => {
		const scrollHandler=()=>{
			if (window.scrollY > 20) {
  				headerRef1.current.classList.add("bg-yellow-900/60");
			} else {
  				headerRef1.current.classList.remove("bg-gray-900/60");
			}

		}
		window.addEventListener("scroll", scrollHandler);
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		}
	},[]);
	return (
    	<>
			<div ref={headerRef1} className='header flex items-center '>
				<div className='bo'></div>
				<ol className='flex'>
					<li><i className="fa-solid fa-house"></i> HOME<div className='l'></div></li>
					<li><i className='fa-solid fa-user'></i> ABOUT<div className='l'></div></li>
					<li><i className="fa-solid fa-code"></i> SKILL<div className='l'></div></li>
					<li><i class="fa-solid fa-microchip"></i> PROJECTS<div className='l'></div></li>
					<li><i className='fa-solid fa-envelope-circle-check'></i> CONTACT<div className='l'></div></li>
					<li><i className='fa-solid fa-file-word'></i> RESUME<div className='l'></div></li>
				</ol>
				<div className='bo  end-0'></div>
			</div>
			<div ref={homeRef2} className='home1 '>
					
					<div className='msg' data-aos="fade-down-right">
						<Typing
  						msg="HARDIK7219"
  						style1={{ color:"red", fontFamily: "monospace",
						background: "linear-gradient(to right,rgb(18, 2, 241),rgb(8, 147, 240))",
						backgroundClip:"text",WebkitTextFillColor: "transparent",fontWeight:"bold"}}
  						speed={100}
  						eraseSpeed={50}
  						pauseTime={1000}
  						cursorBlinkSpeed={400}
						style2={"text-8xl border-b-9 border-b-purple-400"}
						/>
					</div>
				</div>
			<div className='main-menu  p-0 m-0 flex  flex-col items-center justify-center'>
				
				<div className='menu flex flex-col items-center justify-center'>

					<div className='about1 flex items-center'>
						<img src={logo} alt="logo"
						className='logo ml-[3em]' data-aos="fade-right" 
						data-aos-duration="1000" data-aos-offset="300" />
						<div className='abt  text-2xl ml-[15em] overflow-hidden' data-aos="fade-left" 
						data-aos-duration="1000" data-aos-offset="300">
							<h1 className='text-4xl'>HARDIK M PARMAR</h1>
							<h2>I AM A PROGRAMMER</h2>
							<h3>COLLAGE STUDENT STUDYING BCA</h3>
						</div>
					</div >
					<div className=' skill1 flex flex-col items-center p-3 '>
						<div className='skills p-2 grid grid-cols-4' >
							<div onMouseOver={(e) => {
								dis(e.target);
							}}className="skill-col skill-1" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="300" style={{backgroundImage:`url(${skillImg.py})`}}>
							</div>
							<div onMouseOver={(e) => {
								dis(e.target);
							}}className="skill-col skill-2" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="300"  style={{backgroundImage:`url(${skillImg.c})`}}></div>
							<div onMouseOver={(e) => {
								dis(e.target);
							}} className="skill-col skill-3" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="300" style={{backgroundImage:`url(${skillImg.js})`}}></div>
							<div onMouseOver={(e) => {
								dis(e.target);
							}}className="skill-col skill-4" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="300" style={{backgroundImage:`url(${skillImg.react1})`}}></div>
							<div onMouseOver={(e) => {
								dis(e.target);
							}}className="skill-col skill-5" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="300" style={{backgroundImage:`url(${skillImg.cpp})`}}></div>
							<div onMouseOver={(e) => {
								dis(e.target);
							}}className="skill-col skill-6" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="300" style={{backgroundImage:`url(${skillImg.htcss})`}}></div>
							<div onMouseOver={(e) => {
								dis(e.target);
							}}className="skill-col skill-7" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="300" style={{backgroundImage:`url(${skillImg.tai})`}}></div>
							<div onMouseOver={(e) => {
								dis(e.target);
							}}className="skill-col skill-8" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="300" style={{backgroundImage:`url(${skillImg.java})`}}></div>
						</div>
						<div className='skill-det border-3 gap-6 border-black flex items-center'>
							<div className='h-60 w-10 flex flex-col  justify-center gap-4 items-center rounded-4xl bg-black m-3'>
								<div className="h-5 w-5 rounded-full bg-red-500"></div>
								<div className="h-5 w-5 rounded-full bg-green-300"></div>
								<div className="h-5 w-5 rounded-full bg-blue-800"></div>
							</div>
								<Skill detail={detail1}></Skill>
						</div>
					</div>
					<div className='projects1'>
							<div className='p-2 grid grid-cols-4'>
								<div>
									<Project proName="portfolio" link="https://github.com/Hardik7219/portfolioWebsite"></Project>
								</div>
								<div>
									<Project proName="currency-converter" link="https://github.com/Hardik7219/Currency_converter_7219"></Project>
								</div>
								<div>
									<Project proName="rock-paper-scissor_game" link="https://github.com/Hardik7219/Rock_paper_scissor_game_7219"></Project>
								</div>
								<div>
									<Project proName="calculator_app" link="https://github.com/Hardik7219/Calculator_7219"></Project>
								</div>
								<div>
									<Project proName="form-bottom-change" link="https://github.com/Hardik7219/Form_button_changs_7219"></Project>
								</div>
								<div>
									<Project proName="Project 1" link=""></Project>
								</div>
								<div>
									<Project proName="Project 1" link=""></Project>
								</div>
								<div>
									<Project proName="Project 1" link=""></Project>
								</div>
								<div>
									<Project proName="Project 1" link=""></Project>
								</div>
								<div>
									<Project proName="Project 1" link=""></Project>
								</div>
								<div>
									<Project proName="Project 1" link=""></Project>
								</div>
								<div>
									<Project proName="Project 1" link=""></Project>
								</div>

							</div>
					</div>
					<div className='contact1'>
						
					</div>
				</div>
			</div>
    	</>
	)
}

export default App
