import { Profile } from '@/components/Profile';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { NavBar } from '@/components/NavBar'
import { ABeeZee, Galdeano } from 'next/font/google';
import React from 'react';

const abeezee = ABeeZee({
  weight: '400',
  subsets: ['latin']
})
const galdeano = Galdeano({
  weight: '400',
  subsets: ['latin']
})
export default function Home() {
  return (
    <main className={galdeano.className}>

      <div className="min-h-screen flex justify-center item-center bg-gray-800 text-white ">
        <div className='w-3/5'>
          <NavBar />
          <Profile />
          <Projects />
          <Skills />
        </div>
      </div>
    </main>
  );
}
