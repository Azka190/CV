import React from 'react'

function Hireme() {
  return (
    <div >
          {/* BAckground images */}
        <div>
          <img className="flex relative animate-bounce-slow" src="https://denisechandler.com/wp-content/themes/portfolio_oct2021/images/swish_solid.png" alt="robot" />
        </div>
          {/* i love working with you  */}
          <div className='bg-regal-blue flex gap-10 '>
            <div className=' p-16 ml-10 mr-10'>
              <div className='flex'>
                <p className='text-white text-4xl font-mono pr-2'>
                  I
                </p>
                <img className="flex relative animate-pulse w-12 p-1" src="https://denisechandler.com/wp-content/themes/portfolio_oct2021/images/heart2.png" alt="robot" />
                <p className='text-white text-4xl font-mono pl-2'> 
                  Working With You
                </p>
              </div>
                {/* Main text */}
              <div >
                <p className='font-mono pt-9 pb-5'>
                Although I am new to the field, I have a strong passion for both design and coding. I’ve always been someone who has both a creative and a logical side. When I discovered front-end development, I realized it was the perfect fit. I could use my creative side to design user interfaces and my logical side to write clean and efficient code.While I may be new to the field, I am dedicated, hardworking, and always looking for exciting opportunities to grow. Take a look at my portfolio below, and if you think I’d be a good match for an internship, please send me an email.
                </p>
                <a href="mailto:azkarehman2001@gmail.com" className="text-2xl text-white font-mono hover:underline hover:decoration-wavy ">Send me Mail</a>
              </div>
            </div>
            <div className='pr-52'>
              <img className="flex relative -mt-16  w-[250vw] h-[80vh] " src="girl.png" alt="robot" />
            </div>
        </div>
        
    </div>
  )
}

export default Hireme