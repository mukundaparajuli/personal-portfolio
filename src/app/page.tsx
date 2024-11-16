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
import ParticleBackground from '@/components/ParticleComponent';

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
    <main className={galdeano.className} >
      <div className="bg-slate-300 dark:bg-gray-900">
        <div className="fixed inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="min-h-screen flex justify-center items-center relative bg-slate-300/50 dark:bg-black/50">
          <div className='w-full mx-2 md:w-3/5 text-text-light dark:text-text-dark'>
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
      </div>
    </main>
  );
}