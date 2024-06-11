import React from 'react';

function Skills() {
  return (
    <div className='p-4'>
      <div className='text-white font-mono text-4xl md:text-6xl bg-pink-200 shadow-lg hover:shadow-pink-500 flex justify-center mb-8 mt-12 mx-auto max-w-4xl p-4'>
        <h1>My Skills</h1>
      </div>
      <div className=' p-4'>
        {['HTML', 'CSS', 'Javascript', 'Bootstrap', 'Tailwind', 'React', 'Next.js'].map((skill, index) => (
          <div key={index} className='px-10 py-3 text-center border border-blue-500 shadow-lg hover:shadow-blue-500 font-mono rounded-full'>
            <h1>{skill}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
