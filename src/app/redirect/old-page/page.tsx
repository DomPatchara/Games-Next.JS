import React from 'react'
import  { redirect } from "next/navigation"

const OldPage = () => {

    redirect("/redirect/new-page")
    
  return (
    <div>OldPage</div>
  )
}

export default OldPage