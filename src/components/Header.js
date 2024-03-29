import React from 'react';
import Logo from '../assets/logo.svg' ;
import about from './About';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-2 lg:py-8 lg:pt-6'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* <h1 className='text-[35px] text-gradient'>
            CreSencE
          </h1> */}
          <a href='/'>
            <img src={Logo} alt='' className='h-[92px]'></img>
          </a>
          <Link to= "/events" className='btn btn-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200' smooth= {true}>
            Explore!
          </Link>
        </div>
      </div>
    </header>
  
  )
};

export default Header;
