import { cn } from '@/lib/utils'
import React from 'react'
const Wrapper = ({children, className}:{children:React.ReactNode, className?:string}) => {
  return (
    <div className={cn(className,'max-w-7xl lg:max-auto p-5 md:px-10 xl:px-10 w-full')}>
        {children}
    </div>
  )
}

export default Wrapper