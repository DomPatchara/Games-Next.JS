import React from 'react'

interface ProductProps {
    params : { slug: string[]}
}

const Product = ({params} : ProductProps) => {
    const { slug } = params;


     // try to press URL --> http://localhost:3001/products/1/dom/58/88/448/7hhy
  return (
    <div className='container max-w-screen h-screen p-8 bg-gradient-to-b from-blue-400 to-indigo-100'>
        <h1>Product ID: {slug.join(", ")}</h1>
        <br />
        URL Segments:
        <ul>
            {slug.map((id, index) => (
                <li key={index}>
                    {id}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Product