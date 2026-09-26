import React from "react";
import Image from "next/image";
import { IExercises } from "@/types/Exercise";


const getSingleExercise = async (id: string): Promise<IExercises | null> => {
    try {
        const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
        if (!res.ok) return null;
        return await res.json();
    } catch {
        return null;
    }
};

export default async function ExerciseDetails({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const exercise = await getSingleExercise(id);

    if (!exercise) {
        return (
            <div className="flex min-h-[80vh] items-center justify-center text-zinc-400">
                Exercise not found.
            </div>
        );
    }

    return (
        <div className=" mx-auto max-w-7xl px-6 py-10 text-white">
            <main className="grid grid-cols-1 gap-10 lg:grid-cols-2">

                <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-900">
                    <Image
                        src={exercise.image}
                        alt={exercise.name}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>


                <div className="flex flex-col gap-5">

                    <div>
                        <h1 className="text-3xl font-black uppercase tracking-wide text-white">
                            {exercise.name}
                        </h1>
                        <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                            {exercise.description}
                        </p>
                    </div>


                    <div className="flex gap-2">
                        {exercise.muscleGroups?.map((tag, idx) => (
                            <span
                                key={idx}
                                className="rounded-full bg-[#c8f51d] px-3 py-1 text-xs font-black uppercase text-black"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>


                    <div className="divide-y divide-zinc-800/80 rounded-2xl bg-[#141416] p-4 text-xs">
                        <div className="flex justify-between py-2.5">
                            <span className="font-bold uppercase text-zinc-400">EQUIPMENT</span>
                            <span className="font-semibold text-white">{exercise.equipment}</span>
                        </div>
                        <div className="flex justify-between py-2.5">
                            <span className="font-bold uppercase text-zinc-400">DIFFICULTY</span>
                            <span className="font-semibold text-white">{exercise.difficulty}</span>
                        </div>
                        <div className="flex justify-between py-2.5">
                            <span className="font-bold uppercase text-zinc-400">SETS</span>
                            <span className="font-semibold text-white">{exercise.sets}</span>
                        </div>
                        <div className="flex justify-between py-2.5">
                            <span className="font-bold uppercase text-zinc-400">REPS</span>
                            <span className="font-semibold text-white">{exercise.reps}</span>
                        </div>
                        <div className="flex justify-between py-2.5">
                            <span className="font-bold uppercase text-zinc-400">DURATION</span>
                            <span className="font-semibold text-white">{exercise.duration} min</span>
                        </div>
                        <div className="flex justify-between py-2.5">
                            <span className="font-bold uppercase text-zinc-400">CALORIES</span>
                            <span className="font-semibold text-white">{exercise.caloriesBurned} kcal</span>
                        </div>
                        <div className="flex justify-between py-2.5">
                            <span className="font-bold uppercase text-zinc-400">RATING</span>
                            <span className="font-semibold text-white">{exercise.rating}</span>
                        </div>
                    </div>


                    <div>
                        <h3 className="mb-3 text-sm font-black uppercase tracking-wider text-white">
                            INSTRUCTIONS
                        </h3>
                        <ol className="space-y-2 text-xs text-zinc-300 leading-relaxed">
                            {exercise.instructions?.map((step, idx) => (
                                <li key={idx} className="flex gap-2">
                                    <span className="font-bold text-zinc-400">{idx + 1}.</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>


                    <div className="flex gap-3 pt-2">
                        <button className="flex items-center gap-2 rounded-xl bg-[#c8f51d] px-5 py-3 text-xs font-extrabold text-black">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Add to today{"'"}s plan
                        </button>

                        <button className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-[#141416] px-5 py-3 text-xs font-bold text-white">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            Save for later
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}