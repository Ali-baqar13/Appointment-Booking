import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {


  return (
    <footer className="container bottom-0">
      <div className="flex items-center justify-evenly lg:mb-[100px] lg:mt-[200px]">
        <span><img src={logo}></img>Copyright Restricted  &copy; </span>
      </div>

    </footer>
  )
}

export default Footer
