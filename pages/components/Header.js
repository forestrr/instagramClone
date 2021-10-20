import React from 'react'
import Image from "next/image"

function Header() {
    return (
        <div className='flex justify-between bg-white max-w-6xl' >
            {/*left */}
            
            <div className='relative hidden lg:inline-grid h-24 w-24'>
                <Image src='http://links.papareact.com/ocw' 
                layout="fill"
                objectFit='contain'
                />
            </div>

            {/*Middle */}
            <div className='relative  lg:hidden h-10 w-10'>
                <Image src='http://links.papareact.com/jjm' 
                layout="fill"
                objectFit='contain'
                />
            </div>
             
            {/*Right */}
        </div>
    )
}

export default Header
