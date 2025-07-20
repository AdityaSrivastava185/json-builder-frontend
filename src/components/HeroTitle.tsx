import React from 'react' 
import { heroTitleProps } from '@/types/schema';

const HeroTitle:React.FC<heroTitleProps> = ({
    title ,
    description,
}) => {
  return (
    <div className='mt-10 mb-5'>
        <h1 className="text-4xl font-bold mb-2 ">{title}</h1>
        <p className="text-lg text-muted-foreground text-balance">{description}</p>
    </div>
  )
}

export default HeroTitle
