import React from 'react' 
import { heroTitleProps } from '@/types/schema';

const HeroTitle:React.FC<heroTitleProps> = ({
    title ,
    description,
}) => {
  return (
    <div className='py-10'>
        <h1 className="text-4xl font-bold mb-2 ">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  )
}

export default HeroTitle
