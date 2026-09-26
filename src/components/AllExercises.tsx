import { IExercises } from '@/types/Exercise';
import React from 'react';
import EachExercise from './EachExercise';

const getExercises = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
};

const AllExercises = async () => {
    const exerciseData = await getExercises();

    return (
        <section id="all-exercises" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">

            <div className="mb-12">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
                    THE LIBRARY
                </h2>
                <p className="text-slate-400 sm:text-lg max-w-xl">
                    Twelve lifts covering every muscle group
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {exerciseData.map((exercise: IExercises) => (
                    <EachExercise exercise={exercise} key={exercise.id} />
                ))}
            </div>
        </section>
    );
};

export default AllExercises;