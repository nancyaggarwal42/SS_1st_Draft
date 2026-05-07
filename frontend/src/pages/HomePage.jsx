import React, {useEffect} from 'react'
import { useNavigate, Link } from 'react-router'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const HomePage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Head animation
    gsap.to(".head", {
      x: -100,
      duration: 1.2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".page2",
        start: "top 80%",
        scrub: 2,
      },
    });

    // Title animation
    gsap.to(".title", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".page2",
        start: "top 80%",
        scrub: 2,
      },
    });

    // Panel animation
    gsap.to(".pannel", {
      xPercent: -200,
      scrollTrigger: {
        trigger: ".content",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      },
    });

  }, []);

  return (
    <main className='bg-[#151e31] w-full'>
        <div className='h-screen bg-[#151e31] w-full'>
            <div className="page1 text-stone-200 h-screen w-full relative">
             <div className="w-full absolute top-[40%] left-1/2 -translate-x-1/2 -translate-x-1/2">
                <h2 className='text-white font-poppins text-center text-9xl'>Serenity Steps</h2>
                <h3 className='text-white font-poppins text-center text-2xl mt-2'>Small steps towards change</h3>
             </div>
             <div className="absolute right-3 top-5">
                <Link to='register' className='text-xl border-[2px] font-semibold border-stone-400 text-stone-100 px-3 rounded-lg py-1'>Register</Link>
             </div>
            </div>
            <div className="content h-[400vh] w-[100%] relative">
                <div className="flex sticky w-full h-[100vh] top-0 left-0 overflow-hidden">
                    <div className="pannel page2 h-[100vh] w-full flex-shrink-0 bg-gray-900">
                        <h2 className='know text-7xl text-center mt-2'>Who are We?</h2>
                        <div className="box1 h-[70vh] mt-7 w-full text-center flex items-center justify-center">
                          <p className="para text-white shadow-[0_20px_60px rgba(255,255,255,0.12)] text-[2vw] max-w-[90%] border-[5px] px-[4%] py-[2%] rounded-xl border-white">We are a group of three friends <span className="inline-flex mx-3 items-center align-middle shadow-md"><img className="block w-[15vw] h-[100px] bg-black-600 border-[2px] rounded-[33px] object-cover object-top" src="friendsphoto.jpeg" alt="" /></span> enjoying our college life and exploring new problems faced by youth of India and no no it's not just higher unployemnts rates but it is bigger than that it's <span className="text-red-800">Addiction</span>. Addiction of phone addiction of drugs addiction of food and many more. Luckily some individuals are aware of it but many are still not aware of their own addictions. So we are just trying to solve one of the biggest problem of our time Addiction.</p>
                        </div>
                    </div>
                    <div className="pannel px-2 page3 h-[100vh] w-full flex-shrink-0 bg-gray-900">
            <h2 className="know text-7xl text-center mt-2 text-white">What We Do?</h2>
            <div className="box h-[80vh] w-full text-center flex items-center justify-center mt-4">
                <p className="para text-[2vw] text-white shadow-[0 20px 60px rgba(255,255,255,0.12)] max-w-[90%] leading-[1] text-[#374151] border-white border-[5px] rounded-xl px-[2%] py-[2%]">Here on Serenity steps we have created a new type of todo app this app is not your general routine planner app but this app will provide you your own addiction free routine with expert advice and mentornship. Along with this app our plan is to connect with you offline to provide you your personal space where you can do whatever you love. talking about online website so on the website you will get one-to-one mentornship where you can share your progress and talk with a counsellor who will help you out along with it you can get a group therapy. There are more features of this app like according to your requirements tasks will be provided to you and whenever you will complete any of the task you will get some reward.
                    <br />  <span className="inline-flex align-center items-center gap-4">Come Join <img class="w-[15vw] h-[80px] border-[2px] rounded-[33px] block" src="SSlogo.jpeg" alt="" /> to know more</span>
                </p>
            </div>  
        </div>
<div className="pannel px-2 page4 h-[100vh] w-full flex-shrink-0 bg-gray-900">
            <h2 className="know text-7xl text-center mt-2 text-white">How We Do?</h2>
            <div className="box h-[70vh] w-full text-center flex items-center justify-center">
                <p className="para text-[2vw] max-w-[90%] leading-[1.3] text-[#E5E7EB] shadow-[0 20px 60px rgba(255,255,255,0.12)] border-[5px] px-[2%] py-[2%] border-white rounded-xl"><span class="text-center text-[2.2vw]">Addiction is Not a Disease</span> <br /> People often think that we know ourself, we know that we are not addicted to anything but let mea clear to you that almost <span class="text-red-900">90%</span> people including me are addicted to something. <span>Addiction is not always of bad things </span> it can be of good things too like adiction of books you might think that <span>"Books - I wish that I could be addicted to them"</span> but believe me that you are thinking the wrong way accessive use of anything is bad wheather good or bad. <br /> So now it's your decision to change life or to live the life you are living.</p>
            </div>
</div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default HomePage