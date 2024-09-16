import { Profile } from '@/components/Profile';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { NavBar } from '@/components/NavBar';
import { ABeeZee, Galdeano } from 'next/font/google';
import React from 'react';
import { Socials } from '@/components/Socials';
import { Footer } from '@/components/Footer';
import { Blogs } from '@/components/Blogs';
import ThemeToggle from '@/components/ThemeToggle';

const abeezee = ABeeZee({
  weight: '400',
  subsets: ['latin']
});
const galdeano = Galdeano({
  weight: '400',
  subsets: ['latin']
});

export default function Home() {
  return (
    <main className={galdeano.className}>
      <div className="min-h-screen flex justify-center items-center bg-slate-800 text-white bg-fixed">
        <div className='w-full mx-2 md:w-3/5'>
          <div className='hidden md:block'>
            <ThemeToggle />
          </div>
          <NavBar />
          <Profile />
          <Projects />
          {/* <Blogs /> */}
          <Skills />
          <Socials />
          <Footer />
        </div>
      </div>
    </main>
  );
}
