
import { Container } from 'react-bootstrap';
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn, FaGithubAlt, FaBehance } from "react-icons/fa6";

import logo from '../../assist/logo.png'

export default function Home() {
   const contactInfo = [
      {
         icon: <FaGithubAlt className=' size-6' />,
         link: 'https://github.com/mrwa94'
      },
      {
         icon: <FaLinkedinIn className=' size-6' />,
         link: 'https://www.linkedin.com/in/mrwa94'
      },
      {
         icon: <BiLogoGmail className=' size-6' />,
         link: 'https://mail.google.com/mail/u/INBOX@EMAIL.COM/#all/mrwaalsubhi'
      },
      {
         icon: <FaBehance className=' size-6' />,
         link: 'https://github.com/mrwa94'
      }
   ]

   return (
      <div name='home' className=' md:h-screen home-div'>
         <div className='mr-3'>
            <ui className="flex flex-row gap-3 pt-5 justify-end" >
               {contactInfo.map((info) => {
                  return (
                     <li className='list-none'  >
                        <a className='primary-color  hover:text-yellow-200 ' href={info.link}>
                           {info.icon}
                        </a>
                     </li>
                  )
               })}
            </ui>
         </div>
         <Container className='home'>
            <div className='text-left ps-5' >
               <div className='flex flex-row gap-3'>
                  <img src={logo} alt="logo" className=" max-w-[70px]  lg:hidden " />
                  <p className='  text-teal-900 pt-4' > Hi , my name is   </p>
               </div>
               <h1 className='lg:text-6xl md:text-4xl sm:text-xl text-[#3F5654] '>Marwa Alsubhi </h1>
               <h2 className='lg:text-7xl md:text-5xl sm:text-xl text-[#9699a0]'> I'm a Full Stack Developer </h2>
               <p className='text-teal-900 max-w-[700px]'> Development is my passion and expertise. As a front-end developer,
                  I specialize in creating captivating user interfaces
                  and seamless user experiences for websites and applications.</p>
               <div className='button-home'>
                  {/* To download the resume    */}
                  <a
                     download
                     href='Resume.pdf'
                     className='btn-primary group px-5 py-2'>
                     Resume
                  </a>

               </div>
            </div>
         </Container>
      </div>
   )
}