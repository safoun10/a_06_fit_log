import React from 'react';
import Image from 'next/image';
import banner from '@/assets/banner.png';

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-6 md:py-10">
            <div className="bg-[#12141a] border border-gray-800 rounded-2xl md:rounded-3xl py-18 px-16 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
                <div>

                    <div className="text-neon text-xs font-semibold mb-5">
                        WORKOUT LIBRARY
                    </div>
                    <div className="text-3xl sm:text-6xl text-white font-extrabold tracking-tight mb-4">
                        TRAIN WITH INTENT.
                        <br className="hidden sm:inline" />
                        LOG EVERY SET.
                    </div>


                    <div className="text-gray-400 font-light text-sm max-w-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into todays plan, and watch the weeks work add up.
                    </div>


                    <a href="#all-exercises" className="btn bg-neon hover:bg-[#9de000] text-black border-none px-12 py-3 text-sm mt-10">
                        BROWSE WORKOUTS
                    </a>

                </div>


                <div className="flex-1 w-full flex justify-center lg:justify-end items-center relative min-h-65 sm:min-h-85 md:min-h-95">
                    <div className="relative w-full max-w-105 h-70 sm:h-90 md:h-100">

                        <Image
                            src={banner}
                            alt="Preacher Curl Workout Illustration"
                            className="object-contain object-center lg:object-right"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;