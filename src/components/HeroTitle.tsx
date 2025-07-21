import React from 'react' 
import { heroTitleProps } from '@/types/schema';

const HeroTitle:React.FC<heroTitleProps> = ({
    title ,
    description,
}) => {
  return (
    <div className='mt-10 mb-5 flex items-center justify-center flex-col text-center gap-2'>
        <h1 className=" text-2xl md:text-4xl font-bold mb-2 ">{title}</h1>
        <p className="md:text-lg text-muted-foreground text-balance">{description}</p>
    </div>
  )
}

export default HeroTitle
