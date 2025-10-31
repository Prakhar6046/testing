import React from 'react'
import Image from 'next/image'

const NewLogo = () => {
  return (
    <Image
      alt="WCGRP LOGO"
      width={193}
      height={34}
      decoding="async"
      className="max-w-[9.375rem] w-full h-[34px]"
      src="/media/logo-icon-blue.png"
    />
  )
}

export default NewLogo
