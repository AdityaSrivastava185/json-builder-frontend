import Link from 'next/link'
import React from 'react'
import { socialButtonsProps } from '@/types/schema'


const SocialsButtons: React.FC<socialButtonsProps> = ({ ButtonName, ButtonLink }) => {
    return (
        <div>
            <Link
                href={ButtonLink}
                className='bg-foreground text-background px-4 py-2 cursor-pointer rounded-full font-semibold '>{ButtonName}
            </Link>
        </div>
    )
}

export default SocialsButtons
