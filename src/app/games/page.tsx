import React from 'react'
import { games } from '../data/games';
import Link from 'next/link';
import { resolve } from 'path';

const GamePage = async() => {

    //  ใส่ fuction รอโหลด 4 วิ
    await new Promise((resolve) => 
        setTimeout(()=>{
            resolve("Content Loading...");
        }, 2000)
    )

  return (
    <div className='container mx-auto p-6'>
        <h1 className='text-3xl font-bold text-black text-center mb-8'>Explore Games</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {games.map((game)=>(
                <Link 
                    key={game.id}
                    href={`/games/${game.category}/${game.slug}`}
                    className='group relative bg-gray-900 p-5 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl'
                >
                    <div className='relative'>
                        <img 
                            className='w-full h-52 object-cover rounded-lg group-hover:opacity-80 transition'
                            src={game.image} 
                            alt={game.title} />
                        <div className='absolute inset-0 bg-black/30 rounded-lg opacity-0 group-hover:opacity-100 transition'></div>
                    </div>
                    <h2 className='text-2xl font-semibold text-white mt-4'>{game.title}</h2>
                    <p className='text-gray-400 mt-2 text-sm'>{game.description}</p>
                    <p className='text-yellow-400 font-medium mt-3'>⭐{game.rating} /10</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default GamePage