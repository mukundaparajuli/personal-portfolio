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
            className="p-2 dark:bg-gray-800 rounded md:fixed md:right-12 md:top-12"
        >
            {theme === 'dark' ? <FaSun style={{ fontSize: "32" }} /> : <FaMoon style={{ fontSize: "32" }} />}
        </button>
    );
}
