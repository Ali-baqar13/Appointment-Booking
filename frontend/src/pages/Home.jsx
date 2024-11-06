import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import image1 from '../assets/images/hero-img01.png'
import image2 from '../assets/images/hero-img02.png'
import image3 from '../assets/images/hero-img03.png'
import img1 from '../assets/images/icon01.png'
import img2 from '../assets/images/icon02.png'
import img3 from '../assets/images/icon03.png'
import About from '../pages/About/About.jsx'
import ServiceList from '../components/Services/ServiceList.jsx'
import featureImg from '../assets/images/feature-img.png'
import DoctorList from '../components/Doctors/DoctorList.jsx'

const Home = () => {
  return (

    <>
      <section className='hero_section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

            <div>
              <div className='lg:w-[570px] '>
                <h1 className='text-[36px] leading-[60px] text-headingColor font-[500] md:text-[60px] md:leading[70px]'>We helps patients to live long, Strong and healtier Life</h1>
                <p className='text__para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatum, dolorem cum vel, minima, eaque optio quidem quae recusandae nam distinctio illo neque beatae iusto commodi eius? Odio, voluptates nostrum!</p>
                <button className='btn'>Request an Appointment</button>
              </div>
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

                <div >
                  <h2 className="text-[45px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-heading'">30+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>years of Exprience</p>
                </div>
                <div >
                  <h2 className="text-[45px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-heading'">15+</h2>
                  <span className='w-[100px] h-2 bg-purppleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Clinic Locations</p>
                </div>
                <div >
                  <h2 className="text-[45px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-heading'">100%</h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Patient Satisfication</p>
                </div>

              </div>

            </div>


            <div className='flex gap-[30px] justify-end '>
              <div >

                <img className="w-full" src={image1} alt='doc1'></img>

              </div>
              <div className='mt-[30px]'>

                <img src={image2} alt='doc2' className='w-full mb-[30px]' ></img>
                <img src={image3} alt='doc3' className='w-full'></img>

              </div>
            </div>
          </div>
        </div>

      </section>

      <section>

        <div className='container'>

          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Providing the best medical sevices</h2>
            <p className="text__para text_center">wprld class services offer at real time, and enxure patients satisfication, we are providing unmatched services</p>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>

              <div className='flex items-center justify-center'>
                <img src={img1}></img>

              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a doctor</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400px] mt-4 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur iure delectus cumque eveniet ipsam dolorum est molestias amet ratione, in minus expedita rerum voluptatum labore quod similique quae impedit quidem.</p>
                <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid hover:bg-primaryColor border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>

              <div className='flex items-center justify-center'>
                <img src={img2}></img>

              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find Loaction</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400px] mt-4 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur iure delectus cumque eveniet ipsam dolorum est molestias amet ratione, in minus expedita rerum voluptatum labore quod similique quae impedit quidem.</p>
                <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid hover:bg-primaryColor border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:border-none'>

                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>


              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={img3}></img>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400px] mt-4 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur iure delectus cumque eveniet ipsam dolorum est molestias amet ratione, in minus expedita rerum voluptatum labore quod similique quae impedit quidem.</p>
                <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border border-solid hover:bg-primaryColor border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}

      <section>

        <About />

      </section>

      {/* Service Section */}

      <section>

        <div className="container">
          <div classsName='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Medical Services</h2>
            <p className='text__para text-center'>World Class care for EveryOne. Our Health System offers unmatched, Expert health care.</p>
          </div>
        </div>
        <ServiceList />
      </section>
      <section>
        {/* FEATURES SECTION */}
        <div className="container">
          <div className='flex items-center justify-between flex-col lg:flex-row'>
            <div className='xl:w-[670px]'>
              <h2 className='heading'>Get Virtual Treatment, <br />Anytime</h2>
              <ul className='pl-4'>
                <li className='text__para'>1. Schedule the appointment Now</li>
                <li className='text__para'>2. Search for your psyician and then contact for service</li>
                <li className='text__para'>3.  view our psycian who is accepting new patients, use the scheduling tool to select an appointment time </li>

              </ul>
              <Link to="/"><button className="btn">Learn More</button></Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg}></img>
            </div>
          </div>
        </div>

      </section>

      <section>
        {/*--------------------------- our great Doctors ---------------------------*/}


        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Great Doctors</h2>
            <p className="text__para text_center">w0rld class Doctors provides world classs services, services offer at real time, and enxure patients satisfication, we are providing unmatched services</p>

          </div>
        </div>
        {/* ----------------------------------------------------------------------- */}
      </section>

      <DoctorList />
    </>
  )
}

export default Home
