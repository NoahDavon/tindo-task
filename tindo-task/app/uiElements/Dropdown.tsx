'use client'
import React, {MouseEventHandler, ReactNode, useEffect, useState } from 'react'

type Props = {
    children: React.ReactNode[]
    trigger: JSX.Element
    className?: string
    itemClassName?: string
    menuClassName?: string
    onHover?: boolean
}

export default function Dropdown({trigger, children,onHover = false, className = 'border w-fit p-2', itemClassName = 'hover:bg-slate-200 rounded-md p-1', menuClassName= 'bg-slate-100 rounded-b '}: Props) {
    const [open, setOpen] = useState(false);

  return (
    <div className='w-fit h-fit' onMouseEnter={()=> {if(onHover) setOpen(true)}} onMouseLeave={()=> {if(onHover) setOpen(false)}}>
        <div className='w-fit h-fit' onClick={()=>setOpen(!open)}>{trigger}</div>
        <div className={`${menuClassName} fixed transition-transform w-fit scale-y-0 ${open?'scale-y-100':''} origin-top`}>
            {children.map((child)=>{
                return (<div className={itemClassName}>{child}</div>)
            })}
        </div>
    </div>
  )
}