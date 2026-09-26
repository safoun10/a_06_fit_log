import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <footer className="w-full border-t border-zinc-800 bg-[#09090b] py-8 text-zinc-400">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">

                <div className="flex items-center gap-3">
                    <Image
                        src={logo}
                        alt="FitLog Logo"
                        className="h-4 w-4 object-contain"
                    />
                    <div className='text-white font-extrabold'>FITLOG</div>
                </div>


                <p className="text-sm text-zinc-400">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;