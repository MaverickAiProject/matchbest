import Link from 'next/link'
import React from 'react'

function Button() {
    return (
        <Link href={"/contact"}>
            <button
                className='cursor-pointer relative py-2 px-4 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]'
            >
                <div className='absolute inset-0'>
                    <div className='border border-white/20 absolute inset-0 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]'></div>
                    <div className='border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)] rounded-lg'></div>
                    <div className='absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg'></div>
                </div>
                <span>
                    Get Started
                </span>
            </button>
        </Link>
    )
}

export default Button