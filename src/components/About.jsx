import React from 'react'

function About () {
    return (
        <div id="about" className="bg-black py-32">
            <div className='text-white relative flex flex-col items-center font-poiret '>
                <h1 className='text-6xl md:text-6xl mb-4 py-4 font-aesthetic'>About</h1>
                <p className='w-1/2 mx-auto text-2xl md:text-2xl mb-4'>
                    Hi, I’m Shranjeet! I recently graduated with a degree in Computer Science from UC Riverside and have a strong passion for building things that make life easier and more enjoyable. I’ve worked on projects ranging from websites to AI-driven tools and love the creative process of taking an idea and turning it into something real.

                    I’m driven by curiosity and enjoy learning new technologies, but even more than that, I enjoy solving problems and creating meaningful user experiences. My goal is to keep growing as a software engineer and work on projects that make a positive impact.

                    Outside of work, I’m a big fan of anime, basketball, gaming, and martial arts, they keep me inspired and balanced.
                </p>
                <a href="Singh_Shranjeet.pdf" target="_blank" className='border px-10 py-2 rounded-full'>Resume</a>
            </div>

            

            
        </div>
    );
}

export default About