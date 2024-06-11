import React from 'react'

function Education() {
  return (
    <div>
        <div className='text-white font-mono text-6xl bg-pink-200 shadow-lg hover:shadow-pink-500  flex justify-center mt-7  ml-[500px] mr-[500px]' >
            <h1 >My Education</h1>
        </div>
        <div className='flex'>
            <div className='p-4 text-center border border-spacing-5 border-blue-500 shadow-lg shadow-blue-500 pl-5  rounded-full  m-20'>
                <h1 className='text-2xl text-bold underline underline-offset-1'>Matric</h1>
                <p className=''>I compeleted my 10th from Goverment high school Malikwal and got 800 marks</p>
            </div>
            <div className='p-4 text-center border border-spacing-5 border-blue-500 shadow-lg shadow-blue-500 pl-5  rounded-full  m-20'>
                <h1 className='text-2xl text-bold underline underline-offset-1'>Software Engineering</h1>
                <p>I am studying at Virtual University and currently working on my Final Year Project (FYP), which is a Full Stack Job Portal.</p>
            </div>
            <div className='p-4 text-center border border-spacing-5 border-blue-500 shadow-lg shadow-blue-500 pl-5  rounded-full  m-20'>
                <h1 className='text-2xl text-bold underline underline-offset-1'>FSC</h1>
                <p>I compeleted my 12th from Goverment high school Malikwal and got --- marks</p>
            </div>
           
            
        </div>

    </div>
  )
}

export default Education