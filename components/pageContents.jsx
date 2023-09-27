import Image from 'next/image'
import React from 'react'

function PageContents({ logo, title, subtitle, content }) {
  return (
    <div className='flex flex-col w-full items-center md:px-20 xl:mt-40'>
        {/* <span className='-mt-2 text-center'>
        <Image src={logo} width={230} height={130} alt='logo' />
        </span> */}
        <h1 className='text-[30px] text-[#9a2002] font-semibold -mt-16 mb-2 xl:text-[36px]'>{title}</h1>
        <h3 className='text-[34px] text-center font-semibold leading-10'>{subtitle}</h3>

        <p className='px-4 mt-4 text-gray-500 leading-8 md:px-20 xl:text-[20px] xl:leading-10'>{content}</p>

    </div>
  )
}

export default PageContents