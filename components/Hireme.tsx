import React from 'react';

function Hireme() {
  return (
    <div>
      {/* Background images */}
      <div>
        <img
          className="flex relative animate-bounce-slow"
          src="https://denisechandler.com/wp-content/themes/portfolio_oct2021/images/swish_solid.png"
          alt="robot"
        />
      </div>
      {/* I love working with you */}
      <div className="bg-regal-blue flex flex-col md:flex-row gap-10 p-4 md:p-16">
        <div className="md:ml-10 md:mr-10 flex flex-col items-center md:items-start">
          <div className="flex items-center">
            <p className="text-white text-2xl md:text-4xl font-mono pr-2">I</p>
            <img
              className="relative animate-pulse w-8 md:w-12 p-1"
              src="https://denisechandler.com/wp-content/themes/portfolio_oct2021/images/heart2.png"
              alt="heart"
            />
            <p className="text-white text-2xl md:text-4xl font-mono pl-2">Working With You</p>
          </div>
          {/* Main text */}
          <div className="pt-4 md:pt-9 pb-2 md:pb-5">
            <p className="font-mono text-sm md:text-base">
              Although I am new to the field, I have a strong passion for both design and coding. I’ve always been someone who has both a creative and a logical side. When I discovered front-end development, I realized it was the perfect fit. I could use my creative side to design user interfaces and my logical side to write clean and efficient code. While I may be new to the field, I am dedicated, hardworking, and always looking for exciting opportunities to grow. Take a look at my portfolio below, and if you think I’d be a good match for an internship, please send me an email.
            </p>
            <a
              href="mailto:azkarehman2001@gmail.com"
              className="text-xl md:text-2xl text-white font-mono hover:underline hover:decoration-wavy"
            >
              Send me Mail
            </a>
          </div>
        </div>
        <div className="flex justify-center md:pr-52">
          <img
            className="relative -mt-10 md:-mt-16 w-[80vw] md:w-[250vw] h-[50vh] md:h-[80vh]"
            src="girl.png"
            alt="robot"
          />
        </div>
      </div>
    </div>
  );
}

export default Hireme;
