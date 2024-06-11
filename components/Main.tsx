import Link from 'next/link'
import React from 'react'

function Main() {
  return (
    <div  className='mt-15 ml-10 mr-10  '>
        {/* <div className="min-h-screen bg-cover flex " style={{ backgroundImage: "url('/bg2.jpg')" }}> */}
        <div className="min-h-screen bg-cover flex  "  >
            <div>
                <div className='mb-1 mt-16 '>
                    <button className='text-2xl text-white  rounded-md p-2 pr-7 m-7 mb-9 shadow-lg hover:shadow-pink-500 font-mono'>Welcome to my Portfolio</button>
                    <h1 className='text-4xl text-white font-bold ml-7 italic '>Hi! I am <span className='text-6xl bg-pink-200 shadow-lg hover:shadow-pink-500 '>AZKA REHMAN</span></h1>
                    <p className='text-md text-black m-7  mr-48 italic '>
                        I am an enthusiastic and driven learner dedicated to mastering <span className='bg-blue-200 shadow-lg shadow-blue-200'>frontend development.<br /></span>  With a robust foundation in coding and a fervor for cutting-edge web technologies,<br /> I am eager to apply my skills in <span className='bg-blue-200 shadow-lg shadow-blue-200'>a professional environment.</span>  I am actively seeking<br /><span className='bg-blue-200 shadow-lg shadow-blue-200'>Intership opportunities</span> in frontend development to refine my expertise and contribute<br/> to innovative and impactful projects.
                    </p>

                </div>
                
                <div className='flex gap-4 ml-5'>
                    <div className='hover:scale-125' >
                        <Link href='https://github.com/Azka190' target='_blank' >
                            <button >
                        <svg className='hover:shadow-xl  hover:shadow-black-500 rounded-full ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                        </button>
                        </Link>
                    </div>
                    <div>
                        <Link href='https://www.linkedin.com/in/azka-rehman-769303216/' target='_blank'>
                            <svg  className='hover:shadow-xl  hover:shadow-blue-500 hover:scale-125 rounded-full' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                            </svg>
                        </Link>
                    </div>
                    
                    <div className="">
                        <a href="mailto:azkarehman2001@gmail.com" className="">
                            <svg className='hover:shadow-xl  hover:shadow-green-500 hover:scale-125 rounded-full p-1' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="bg-blue-200 rounded-full shadow-xl hover:shadow-blue-500 z-20 ">
                    <img className="flex relative animate-bounce-slow pl-7" src="/cuterobot.png" alt="robot" />
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Main