import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Form, Button } from 'react-bootstrap'


export default function Contact() {

  // const schema = z.object({
  //   name: z.string(),
  //   email: z.string().email(),
  //   message: z.string().message
  // })
  const form = useRef();

  const SERVICE_ID = 'service_wh3w90p'
  const TEMPLATE_ID = 'template_dyouj9n'
  const PUBLIC_KEY = '7X-TDuEJLqqC8NGiY'

  // to send email for me 
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className=' container w-full flex flex-col'>
      <h5 className=' text-[#3F5654] text-4xl font-serif m-3 pt-3 border-b-4  border-[#d8da8e] '> Contact me</h5>
      <Form onSubmit={sendEmail} ref={form} className='  flex  flex-col  justify-center lg:ml-48   ml-20 lg:w-1/2  w-96 shadow-md' >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label> Name </Form.Label>
          <Form.Control type="text" placeholder="Enter your name" className='shadow' name='name' required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" className='shadow ' name='email' required />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <textarea placeholder='message' className='shadow message' name='message' required
          ></textarea>
        </Form.Group>

        <div className='text-center'>
          <Button type="submit" className='btn-primary'> Send </Button>
        </div>
      </Form>
    </div>

  )
}
