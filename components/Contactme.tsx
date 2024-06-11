import React from 'react'

function Contactme() {
  return (
    <div >
        <div className='text-white font-mono text-6xl bg-pink-200 shadow-lg hover:shadow-pink-500  flex justify-center mt-7 ml-[500px] mr-[500px]' >
            <h1 >Contact Me</h1>
        </div>
        <div className=' flex gap-10 p-10 '>
            <div className=' p-10 pb-1  pr-10 pt-64'>
                <div>
                    <div className=''>
                        <h1 className='text-2xl  font-mono text-white bg-pink-200 shadow-lg hover:shadow-pink-500 '>Phone Number</h1>
                        <p className='italic py-6 pl-9'>03195878462</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-mono text-white bg-pink-200 shadow-lg hover:shadow-pink-500 '>Whatsapp</h1>
                        <p className='italic py-6 pl-9'>03484837261</p>
                    </div>
                    <div>
                        <h1 className='text-2xl text-white font-mono bg-pink-200 shadow-lg hover:shadow-pink-500 '>Gmail</h1>
                        <p className='italic py-6 pl-9'>azkarehman2001@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className=''>
              <img className="flex relative w-[70vw] h-[100vh] " src="contact.png" alt="robot" />
            </div>
        </div>
        
    </div>
  )
}

export default Contactme