import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiClock, FiStar } from 'react-icons/fi'; // or use lucide-react / svg icons
import { IoFlame } from 'react-icons/io5';
import { IExercises } from '@/types/Exercise';

interface EachExerciseProps {
    exercise: IExercises;
}

const EachExercise = ({ exercise }: EachExerciseProps) => {
    return (
        <div>
            <Link
                href={`/exercises/${exercise.id}`}
                className="group block overflow-hidden rounded-2xl bg-[#18181c] transition-transform duration-200 hover:border"
            >

                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={exercise.image}
                        alt={exercise.name}
                        fill
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-102"
                    />
                </div>


                <div className="p-8">

                    <div className="flex flex-wrap gap-2 mb-3">
                        {exercise.muscleGroups?.map((group, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-[#c8f51d] px-3 py-1 text-[11px] font-black uppercase text-black tracking-wider"
                            >
                                {group}
                            </span>
                        ))}
                    </div>


                    <h3 className="text-xl font-extrabold uppercase text-white tracking-wide">
                        {exercise.name}
                    </h3>


                    <p className="mt-1 text-sm text-zinc-400 font-medium">
                        {exercise.equipment}
                    </p>


                    <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center gap-5 text-xs text-zinc-400 font-medium">

                        <div className="flex items-center gap-1.5">
                            <FiClock className="h-4 w-4" />
                            <span>{exercise.duration} min</span>
                        </div>


                        <div className="flex items-center gap-1.5">
                            <IoFlame className="h-4 w-4 text-zinc-400" />
                            <span>{exercise.caloriesBurned} kcal</span>
                        </div>


                        <div className="flex items-center gap-1.5">
                            <FiStar className="h-4 w-4" />
                            <span>{exercise.rating}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default EachExercise;