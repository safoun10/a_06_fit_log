"use client";

import { usePlan } from "@/context/ExerciseContext";
import { IExercises } from "@/types/Exercise";
import { toast } from "react-toastify";

const ExerciseActionButtons = ({ exercise }: { exercise: IExercises }) => {
    const { addToPlan, removeFromPlan, addToSaved, removeFromSaved, isInPlan, isInSaved } = usePlan();

    const isPlanned = isInPlan(exercise.id);
    const isSaved = isInSaved(exercise.id);

    const handlePlanToggle = () => {
        if (isPlanned) {
            removeFromPlan(exercise.id);
            toast.info(`Removed "${exercise.name}" from today's plan.`, {
                theme: "dark",
                position: "bottom-left",
                pauseOnHover: false,
                autoClose: 2000,
            });
        } else {
            addToPlan(exercise);
            toast.success(`Added "${exercise.name}"!`, {
                theme: "dark",
                position: "bottom-left",
                pauseOnHover: false,
                autoClose: 2000,
            });
        }
    };

    const handleSavedToggle = () => {
        if (isSaved) {
            removeFromSaved(exercise.id);
            toast.info(`Removed "${exercise.name}" from saved workout`, {
                theme: "dark",
                position: "bottom-left",
                pauseOnHover: false,
                autoClose: 2000,
            });
        } else {
            addToSaved(exercise);
            toast.success(`Saved "${exercise.name}"!`, {
                theme: "dark",
                position: "bottom-left",
                pauseOnHover: false,
                autoClose: 2000,
            });
        }
    };

    return (
        <div className="flex gap-3 pt-2">
            <button
                onClick={handlePlanToggle}
                className={`hover:cursor-pointer flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-extrabold transition-colors ${isPlanned
                    ? "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                    : "bg-[#c8f51d] text-black hover:bg-[#b5f200]"
                    }`}
            >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {isPlanned ? "Remove from plan" : "Add to today's plan"}
            </button>

            <button
                onClick={handleSavedToggle}
                className={`hover:cursor-pointer flex items-center gap-2 rounded-xl border px-5 py-3 text-xs font-bold transition-colors ${isSaved
                    ? "border-lime-500/50 bg-[#141416] text-[#c8f51d]"
                    : "border-zinc-700 bg-[#141416] text-white hover:border-zinc-500"
                    }`}
            >
                <svg className="h-4 w-4" fill={isSaved ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                {isSaved ? "Saved" : "Save for later"}
            </button>
        </div>
    );
}

export default ExerciseActionButtons;