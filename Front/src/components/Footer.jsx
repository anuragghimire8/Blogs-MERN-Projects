import React from 'react'
import { Footer, FooterLink, FooterLinkGroup } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram} from "react-icons/bs";


const footer = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500"> 
    <div className='w-full max-w-7xl mx-auto'>
    <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
    <div className='mt-5'>
    <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl  font-semibold dark:text-white'>
  <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white'>
    Anurag's
    </span>
    Blog</Link>
    </div>
      <div className='grid grid-cols-2 sm:mt-4 sm:grid-cols-3 sm:gap-8'>
      <div>
      <Footer.Title title="About"/>
      <FooterLinkGroup col>
         <FooterLink href="https://"
         targer="_blank"
         rel="noopener noreferrer">
         
         </FooterLink>
         <FooterLink href="https://"
         targer="_blank"
         rel="noopener noreferrer">
         Home
         </FooterLink>
         <FooterLink href="https://"
         targer="_blank"
         rel="noopener noreferrer">
         Blogs
         </FooterLink>
      </FooterLinkGroup>
      </div>
      <div>
      <Footer.Title title="Follow Us"/>
      <FooterLinkGroup col>
         <FooterLink href="https://"
         targer="_blank"
         rel="noopener noreferrer">
         
         </FooterLink>
         <FooterLink href="https://www.facebook.com/ghimire.anurag/"
         targer="_blank"
         rel="noopener noreferrer">
         Facebook
         </FooterLink>
         <FooterLink href="https://www.instagram.com/anuragghimire3/"
         targer="_blank"
         rel="noopener noreferrer">
         Instagram
         </FooterLink>
      </FooterLinkGroup></div>
          
      </div>
    </div>
    </div>
    <Footer.Divider/>
    <div className='w-full smflex sm:items-center sm:justify-between'>
    <div className="flex   gap-9 sm:mt-0 mt-4 sm:justify-center'">
    
    <Footer.Copyright href="#" by="Your's Blog" year={new Date().getFullYear()}/>
    
    <Footer.Icon href="https://www.facebook.com/ghimire.anurag/" icon={BsFacebook}/>
    <Footer.Icon href="https://www.instagram.com/anuragghimire3/" icon={BsInstagram}/>
    </div>
    </div>
      </Footer>
  )
}

export default footer
