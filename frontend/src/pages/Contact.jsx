import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Contact us</h2>

        <p className='mb-8 lg:mb-16 font-light text-center text__para' >Got techncal issue want to send feedback about data feature</p>

        <form action="#" className='space-y-8'>
          <div>
            <label htmlFor='email' className='form__label'>Your Email</label>
            <input type='email' id='email' placeholder='example@gmail.com' className='form__input mt-1 '></input>
          </div>


          <div>
            <label htmlFor='subject' className='form__label'>Subject</label>
            <input type='text' id='subject' placeholder='Your Queries' className='form__input mt-1 '></input>
          </div>


          <div className='sm:col-span-2'>
            <label htmlFor='message' className='form__label'>Message</label>
            <textarea rows='6' type='text' id='message' placeholder='Message' className='form__input mt-1 ' />
          </div>
          <button className='btn rounded-md' type='submit' >submit</button>
        </form>

      </div>

    </section>
  )
}

export default Contact