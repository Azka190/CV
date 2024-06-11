import React from 'react'

function Contactme() {
  return (
    <div className="p-4">
      <div className='text-white font-mono text-4xl md:text-6xl bg-pink-200 shadow-lg hover:shadow-pink-500 flex justify-center mt-7 mx-auto max-w-4xl p-4'>
        <h1>Contact Me</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-10 p-4 md:p-10'>
        <div className='p-4 md:p-10 pb-1 md:pb-1 pr-4 md:pr-10 pt-10 md:pt-64'>
          <div>
            <div className='mb-6'>
              <h1 className='text-xl md:text-2xl font-mono text-white bg-pink-200 shadow-lg hover:shadow-pink-500 p-2'>Phone Number</h1>
              <p className='italic py-4 md:py-6 pl-4 md:pl-9'>03195878462</p>
            </div>
            <div className='mb-6'>
              <h1 className='text-xl md:text-2xl font-mono text-white bg-pink-200 shadow-lg hover:shadow-pink-500 p-2'>Whatsapp</h1>
              <p className='italic py-4 md:py-6 pl-4 md:pl-9'>03484837261</p>
            </div>
            <div>
              <h1 className='text-xl md:text-2xl font-mono text-white bg-pink-200 shadow-lg hover:shadow-pink-500 p-2'>Gmail</h1>
              <p className='italic py-4 md:py-6 pl-4 md:pl-9'>azkarehman2001@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img className="w-full h-auto md:w-[70vw] md:h-[100vh]" src="contact.png" alt="robot" />
        </div>
      </div>
    </div>
  )
}

export default Contactme
