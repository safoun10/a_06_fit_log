"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePlan } from "@/context/ExerciseContext";

const MyPlanPage = () => {
    const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
    const { planList, savedList, removeFromPlan, removeFromSaved } = usePlan();

    const activeItems = activeTab === "today" ? planList : savedList;

    const exercisesCount = activeItems.length;
    const totalMinutes = activeItems.reduce((acc, curr) => acc + (curr.duration || 0), 0);
    const totalCalories = activeItems.reduce((acc, curr) => acc + (curr.caloriesBurned || 0), 0);

    const handleMarkAsDone = (id: string | number, name: string) => {
        removeFromPlan(id);
        toast.success(`Completed "${name}"! Great work.`, {
            theme: "dark",
            position: "bottom-center",
            pauseOnHover: false,
            autoClose: 2000
        });
    };

    const handleRemove = (id: string | number, name: string) => {
        if (activeTab === "today") {
            removeFromPlan(id);
            toast.info(`Removed "${name}" from today's plan.`, {
                theme: "dark",
                position: "bottom-center",
                pauseOnHover: false,
                autoClose: 2000
            });
        } else {
            removeFromSaved(id);
            toast.info(`Removed "${name}" from saved list.`, {
                theme: "dark",
                position: "bottom-center",
                pauseOnHover: false,
                autoClose: 2000
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#0c0d10] px-4 py-8 text-white md:px-8">
            <main className="mx-auto max-w-5xl space-y-8">
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
                        MY PLAN
                    </h1>
                    <p className="mt-1 text-xs text-zinc-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="grid grid-cols-3 divide-x divide-zinc-800/80 rounded-2xl border border-zinc-800/60 bg-[#121418] p-6">
                    <div className="pr-4">
                        <span className="text-xs text-zinc-400">Exercises</span>
                        <p className="mt-2 text-3xl font-black text-[#B5F200]">{exercisesCount}</p>
                    </div>
                    <div className="px-4 md:px-8">
                        <span className="text-xs text-zinc-400">Minutes</span>
                        <p className="mt-2 text-3xl font-black text-white">{totalMinutes}</p>
                    </div>
                    <div className="pl-4 md:pl-8">
                        <span className="text-xs text-zinc-400">Calories</span>
                        <p className="mt-2 text-3xl font-black text-white">{totalCalories}</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex rounded-xl border border-zinc-800/80 bg-[#121418] p-1">
                        <button
                            onClick={() => setActiveTab("today")}
                            className={`rounded-lg px-5 py-2 text-xs font-bold transition-all ${activeTab === "today"
                                ? "bg-[#1d2026] text-white"
                                : "text-zinc-400 hover:text-white"
                                }`}
                        >
                            Todays Plan ({planList.length})
                        </button>
                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`rounded-lg px-5 py-2 text-xs font-bold transition-all ${activeTab === "saved"
                                ? "bg-[#1d2026] text-white"
                                : "text-zinc-400 hover:text-white"
                                }`}
                        >
                            Saved ({savedList.length})
                        </button>
                    </div>
                </div>

                {activeItems.length === 0 ? (
                    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-[#121418]/50 p-8 text-center">
                        <h3 className="text-lg font-black uppercase tracking-wide text-white">
                            NOTHING HERE YET
                        </h3>
                        <p className="mt-1 text-xs text-zinc-400">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link
                            href="/"
                            className="mt-6 rounded-full bg-[#B5F200] px-6 py-2.5 text-xs font-black text-black transition-all hover:bg-[#a3db00]"
                        >
                            Go to workouts
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {activeItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col gap-4 rounded-2xl border border-zinc-800/60 bg-[#121418] p-4 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl bg-zinc-800">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-base font-black uppercase text-white">{item.name}</h2>
                                        <p className="text-xs text-zinc-400">{item.equipment}</p>
                                        <div className="flex items-center gap-3 pt-1 text-[11px] text-zinc-300">
                                            <span>{item.duration} min</span>
                                            <span>{item.caloriesBurned} kcal</span>
                                            <span>★ {item.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Link
                                        href={`/exercises/${item.id}`}
                                        className="rounded-xl border border-zinc-800 bg-[#171a21] px-4 py-2 text-xs font-semibold text-white"
                                    >
                                        View Details
                                    </Link>

                                    {activeTab === "today" && (
                                        <button
                                            onClick={() => handleMarkAsDone(item.id, item.name)}
                                            className="rounded-xl bg-[#B5F200] px-4 py-2 text-xs font-black text-black transition-colors hover:bg-[#a3db00]"
                                        >
                                            ✓ Mark as Done
                                        </button>
                                    )}

                                    <button
                                        onClick={() => handleRemove(item.id, item.name)}
                                        className="p-2 text-zinc-500 hover:text-zinc-300"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default MyPlanPage;