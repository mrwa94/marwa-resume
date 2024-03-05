import { Link } from "react-router-dom";
import logo from '../assist/logo.png'

export function SideBar() {
  const titleItem = [
    {
      title: 'HOME',
      path: '/',

    },

    {
      title: 'ABOUT ME',
      path: '/about',

    },
   {
      title: 'SERVICES',
      path: '/services',

    },
    {
      title: 'WORKS',
      path: '/works',

    },
    {
      title: 'CONTACT ',
      path: '/contact',
    }
  ]
  return (

    <ul className="Typography mt-5  lg:block  ">
      <img src={logo} alt="logo" className="logo" />
      {titleItem.map((item, index) => {
        return (
          <li className="a-sidebar   mt-5 " key={index}>
            <Link
              className=" text-decoration-none  lg:text-xl md:text-xl text-white gap-3 lg:m-2  lg:p-3 :shadow-inner  sm:text-sm sm:p-5"
              to={item.path}>
              <span>{item.title}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  );
}