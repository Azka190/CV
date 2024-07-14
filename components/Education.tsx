import React from 'react';

function Education() {
  return (
    <div className="p-4">
      <div className="text-white font-mono text-4xl md:text-6xl bg-pink-200 shadow-lg hover:shadow-pink-500 flex justify-center mt-7 mx-auto max-w-4xl p-4">
        <h1>My Education</h1>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center p-4 md:p-10">
        {/* <div className='p-4 text-center border border-spacing-5 border-blue-500 shadow-lg shadow-blue-500 rounded-full mx-4 md:mx-20 my-4 md:my-20'>
          <h1 className='text-xl md:text-2xl font-bold underline underline-offset-1'>Matric</h1>
          <p>I completed my 10th from Govt Malikwal and got 800 marks.</p>
        </div> */}
        <div className="p-4 text-center border border-spacing-5 border-blue-500 shadow-lg shadow-blue-500 rounded-full mx-4 my-4 md:mx-20 md:my-20 max-w-xs md:max-w-none">
          <h1 className="text-lg md:text-2xl font-bold underline underline-offset-1">Software Engineering</h1>
          <p className="text-sm md:text-base">
            I am a student at Virtual University, currently developing a Full Stack Job Portal as my Final Year Project (FYP). This project involves creating a comprehensive platform for job seekers and employers, integrating front-end and back-end technologies to deliver a seamless user experience.
          </p>
        </div>
        {/* <div className='p-4 text-center border border-spacing-5 border-blue-500 shadow-lg shadow-blue-500 rounded-full mx-4 md:mx-20 my-4 md:my-20'>
          <h1 className='text-xl md:text-2xl font-bold underline underline-offset-1'>FSC</h1>
          <p>I completed my 12th from Degree collage Malikwal</p>
        </div> */}
      </div>
    </div>
  );
}

export default Education;
