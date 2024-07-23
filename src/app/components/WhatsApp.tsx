import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function Whatsapp() {
    return (
        <div className='fixed bottom-28 lg:right-10 right-4 z-20 cursor-pointer '>
            <Link href="https://api.whatsapp.com/send/?phone=919501868775&text=Hello+I+would+like+to+know+more+about+Fielmente+Hospitality+Marketing+Agency%21&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className='w-24 h-24 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all hover:shadow-2xl'>
                <FaWhatsapp size={37} color='white' />
                <span className='sr-only'>what&apos;s app</span>
            </Link>
        </div>
    )
}

export default Whatsapp


