
import React from 'react';
import { SiRedux, SiMongodb, SiExpress, SiTailwindcss, SiFirebase } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaNode, FaReact, FaSwift, FaBootstrap, FaGithub } from "react-icons/fa";

import portal from '../../assist/portal.jpeg'
import messana from '../../assist/messana.png'
import chatApp from '../../assist/chatApp.png'
import landing from '../../assist/landing.jpeg'
import website from '../../assist/websitepng.png'
import commerce from '../../assist/E-commerce.png'

export default function Works() {
  const projects = [
    {
      image: website,
      alt: 'project image',
      title: "Tim website",
      desc: " Electricity website",
      icon: [<FaHtml5 className=' text-orange-500 w-5 h-5' />, <FaCss3Alt className=' text-blue-500 w-5 h-5 ' />],
      url: 'https://github.com/mrwa94/ChatApp'
    }, {
      image: commerce,
      title: 'MEME  ',
      desc: "E-commerce website  ",
      icon: [<FaReact className=' text-blue-700 w-5 h-5 pr-1' />, <SiRedux className='  text-purple-600 w-5 h-5 pr-1' />, <SiMongodb className='  text-green-600 w-5 h-5 pr-1' />, <SiExpress className='  text-white w-5 h-5 pr-1' />, <SiTailwindcss className='  text-blue-400 w-5 h-5 pr-1' />, <FaNode className=' text-green-700 w-5 h-5 pr-1' />,],
      url: 'https://github.com/mrwa94/E-commerce-MEME'
    }, {
      image: chatApp,
      alt: 'chatApp project image',
      title: "Between Us application",
      desc: " chat app  application",
      icon: [<FaSwift className=' text-orange-500 w-5 h-5' />, <SiFirebase className=' text-orange-500 w-5 h-5' />],
      url: 'https://github.com/mrwa94/ChatApp'
    }, {
      image: messana,
      alt: 'Messana project image',
      title: "Messana website",
      desc: " buy and sell  between customers ",
      icon: [<FaReact className=' text-blue-500 w-5 h-5' />, <FaBootstrap className=' text-purple-600 w-5 h-5' />],
      url: 'https://github.com/mrwa94/mesana-reactjs'

    }, {

      image: portal,
      alt: 'portal project image',
      title: "Company portal",
      desc: " searching about company portal",
      icon: [<FaReact className=' text-blue-500 w-5 h-5' />, <SiRedux className=' text-purple-600 w-5 h-5' />],
      url: 'https://github.com/mrwa94/company-portal-redux-toolkit'
    }, {

      image: landing,
      alt: 'landing project image',
      title: "Landing page",
      desc: " Landing page for plant product",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z" /><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z" /><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z" /><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z" /><circle cx="32" cy="24" r="7" fill="#29b6f6" /></svg>,
    
    }]

  return (
    <div className=' '>
      <h5 className='  text-[#3F5654] text-4xl font-serif m-3 pt-3  border-b-4  border-[#d8da8e] w-50'> Works</h5>
      <div className=' grid lg:grid-cols-4  md:grid-cols-3 min-[300px]:grid-cols-2 gap-4  text-center py-8' >
        {projects.map((project) =>
          <div className=' group relative rounded-md shadow-md   items-center  justify-center  overflow-hidden cursor-pointer'>
            <div className=' h-72 w-100 '>
              <img src={project.image} alt={project.alt} className='object-cover  group-hover:scale-125  transition-transform ' />
            </div>
            <div className=' absolute inset-0  bg-gradient-to-b  from-transparent  via-transparent group-hover:from-black/70  group-hover:via-black/90  group-hover:to-black/70  '>
              <div className=' absolute inset-0 flex  flex-col  items-center  justify-center px-9  text-center  translate-y-[90%] group-hover:translate-y-0  transition-all duration-500 '>
                <h1 className=' text-2xl font-bold text-yellow-200'>{project.title}</h1>
                <p className='text-white mb-3 '> {project.desc}</p>
                <div className=' flex flex-row '>
                  {project.icon}

                </div>
                <div className='flex flex-row   mt-10'>
                  <a href={project.url}>
                    <FaGithub className='text-yellow-200 h-10 w-10' />
                  </a>
                </div>
              </div>
            </div>

          </div>
        )}


      </div>
    </div>

  );
}
