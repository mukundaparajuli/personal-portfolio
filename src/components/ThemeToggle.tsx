"use client"

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded md:fixed md:right-12 md:top-12 border-none flex items-center justify-center"
            style={{
                boxShadow: 'none',
            }}
        >
            {theme === 'dark' ? (
                <FaMoon
                    style={{
                        fontSize: '44px',
                        color: 'white',
                        boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
                        borderRadius: '32px',
                        padding: '8px',
                    }}
                />
            ) : (
                <FaSun
                    className='bg-white '
                    style={{
                        fontSize: '44px',
                        color: 'black',
                        boxShadow: '0 0 8px rgba(0, 120, 0, 0.9)',
                        borderRadius: '32px',
                        padding: '8px',

                    }}
                />

            )}
        </button>
    );
}
