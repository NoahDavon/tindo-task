'use client'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
    title: string
    children: React.ReactNode[]
    className?: string
    itemClassName?: string
    menuClassName?: string
}

export default function Dropdown({title, children, className = 'border w-fit p-2', itemClassName = 'hover:bg-slate-200 rounded-md p-1', menuClassName= 'bg-slate-100 rounded-b '}: Props) {
    const [open, setOpen] = useState(false);

  return (
    <div>
        <button className={className} onClick={()=> setOpen(!open)}>{title}</button>
        <div className={`${menuClassName} transition-transform w-fit scale-y-${open? '100': '0'} origin-top`}>
            {children.map((child)=>{
                return (<div className={itemClassName}>{child}</div>)
            })}
        </div>
    </div>
  )
}