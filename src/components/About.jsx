import React from 'react'

function About () {
    return (
        <div id="about" className="bg-black py-32">
            <div className='text-white relative flex flex-col items-center font-poiret '>
                <h1 className='text-6xl md:text-6xl mb-4 py-4 font-aesthetic'>About</h1>
                <p className='w-1/2 mx-auto text-2xl md:text-2xl mb-4'>
                   Hey! I'm Sharanjeet and I am a computer science student at UCR and I have a passion for full-stack development.
                   I have worked on various teams creating some really impactful websites and I love every second of it. My goal 
                   is to become a full time Software Engineer and contribute to a greater cause. Outside of coding I have interests
                    in anime, video, games, basketball, and martial arts. For more information check out my resume below!
                </p>
                <a href="Singh_Shranjeet (20).pdf" target="_blank" className='border px-10 py-2 rounded-full'>Resume</a>
            </div>

            

            
        </div>
    );
}

export default About