import React from 'react'
import PasswordToggle from '@/components/PasswordToggle'

const BeforeLogin: React.FC = () => {
  return (
    <div>
      <PasswordToggle />
      <p>
        <b>Welcome to your Wilson CGRP!</b>
        {' This is where staff will log in to manage the website.'}
      </p>
    </div>
  )
}

export default BeforeLogin
