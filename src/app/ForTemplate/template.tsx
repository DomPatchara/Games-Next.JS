"use client"

import { useState } from "react"
import Link from "next/link"



const Template = () => {

    const [name, setName] = useState('')
    return (

        <div className="flex flex-col">
            <input 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="after clicked then something that you type gone!"
                className="text-black w-100 px-3 py-2 border rounded-2xl"
            />
            <div className="flex gap-2.5 mt-4">
                <Link 
                    className="bg-purple-400 px-4 py-2 rounded-2xl" 
                    href="/ForTemplate/revenue"
                >
                    Revenue
                </Link>
                
                <Link 
                    className="bg-purple-400 px-4 py-2 rounded-2xl" 
                    href="/ForTemplate/stats"
                >
                    Stats
                </Link>
            </div>
        </div>
    )
}


export default Template