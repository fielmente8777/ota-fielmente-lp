"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function Whatsapp() {
    const pathName = usePathname()
    if (pathName.includes("/thank-you/")) return null
    return (
        <div className='fixed bottom-24 lg:left-10 left-4 z-20 cursor-pointer '>
            <Link href="https://api.whatsapp.com/send/?phone=919501868775&text=Hello+I+would+like+to+know+more+about+Fielmente+Hospitality+Marketing+Agency%21&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className='w-12 aspect-square text-2xl rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all hover:shadow-2xl'>
                <FaWhatsapp color='white' />
                <span className='sr-only'>what&apos;s app</span>
            </Link>
        </div>
    )
}

export default Whatsapp


