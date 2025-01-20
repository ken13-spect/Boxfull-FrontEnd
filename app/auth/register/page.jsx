import React from 'react'
import RegisterForm from './register-form'
import Card from 'antd/es/card/Card'
import { Image } from 'antd'

export default function Register() {
  return (
    
      <Card>
           <Image
          width={200}
          src="https://innogencapital.com/wp-content/uploads/2024/07/Logo-Boxful.png"
        />
        <p className='font-thin italic text-sm my-4'>Be part of us by filling out the registration form</p>
       <RegisterForm />
      </Card>
    
  )
}
