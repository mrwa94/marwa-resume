import  { useState } from 'react'

export default function About() {
  const data = [
    {
      id: 1,
      label: 'Qualifications',
      value: 'Qualifications',
      desc: 'Bachelor of Computer Science , Taibah University',
    },
    {
      id: 2,
      label: 'Certificates',
      value: 'Certificates',
      desc: <ui className=" list-none space-y-4 animate-fadeInUp">
        <li className='p-3'>SDA Virtual Internships program </li>
        <li className='p-3'>Apple Development with Swift Associate</li>
        <li className='p-3'>Certified JavaScript Developer. W3Schools</li>
      </ui>,

    },
    {
      id: 3,
      label: 'Courses',
      value: 'Courses',
      desc: <ui className=" list-none ">
      <li className='p-3'> SDA x Integrify || Full  Stack MERN Software  Development bootcamp</li>
      <li className='p-3'>SDA x Dojo Academy || Mobile  Application Developer</li>
      <li className='p-3'>React  Basics by Meta, Coursera    (January 2023)</li>
      <li className='p-3'>React  Basics by Meta, Coursera    (January 2023)</li>
    </ui>,

    },
   
  ]

  const [isClicked, setIsClicked] = useState(false)
  const [currentTab, setCurrentTab] = useState()

  const handleTab = (e) => {
    setCurrentTab(e.target.id)
    setIsClicked(!isClicked)
  }
  return (
    <div className='about-content h-screen'>
      <h5 className='  text-[#3F5654] text-4xl font-serif m-3 pt-3  w-50'> About Me</h5>
      <div className='container justify-center items-center  lg:mt-52 lg:ml-10 about-header'>
        <div className='tabs m-6 w-75 p-2 rounded-full flex  flex-row justify-start  gap-10   lg:text-2xl  font-bold  font-sans '>
          {data.map((tab, i) => {
            return <button key={i}
              onClick={handleTab}
              id={tab.id}
              className={`lg:ml-4 justify-center text-[#3f5654] border-b-4  hover:text-red-950 focus:border-b-[#d8da8e] tab-label `}>{tab.label}</button>
          })}
        </div>
        <div className=' m-16 '>
          {data.map((tab, i) =>
            <div key={i} className=' border-l-4 p-2'>
              { currentTab === `${tab.id}` && <p>{tab.desc}</p>}
            </div>
          )}
        </div>
      </div>
    </div>

  )
}
