import Link from 'next/link'
import React from 'react'
import { IoCall } from "react-icons/io5";

function Call() {
    return (
        <div className='fixed bottom-28 lg:left-10  left-4 z-20 cursor-pointer'>
            <Link href="tel:+919501868775" target="_blank" rel="noreferrer" className='w-24 h-24 rounded-full flex items-center justify-center bg-blue-700 hover:bg-blue-800 hover:shadow-2xl transition-all'>
                <IoCall size={37} color='white' />
                <span className='sr-only'>what&apos;s app</span>
            </Link>
        </div>
    )
}

export default Call