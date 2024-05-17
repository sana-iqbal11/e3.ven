import React from 'react'


function CardSection({title, subtitle}: {title:string, subtitle:string}) {
  return (
    <div>
        <div
            className='relative flex flex-col gap-[10px] shadow-2xl w-full
               p-[20px]'>
                <div
          className="absolute inset-[-199px]  
        mix-blend-color-dodge bg-no-repeat bg-contain laptop:hidden block
        "
          style={{
            backgroundImage: `url('/images/large-gradient.png')`,
            backgroundPosition: "50%",
          }}
        ></div>
            <p className="text-3xl text-white font-[300] laptop:text-start text-center">{title}</p>
            <p className="text-white font-[300] laptop:text-start text-center">{subtitle}</p>
            
        </div>
    </div>
  )
}

export default CardSection