"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { IExercises } from "@/types/Exercise";

interface PlanContextType {
  planList: IExercises[];
  setPlanList: React.Dispatch<React.SetStateAction<IExercises[]>>;
  savedList: IExercises[];
  setSavedList: React.Dispatch<React.SetStateAction<IExercises[]>>;
  addToPlan: (exercise: IExercises) => void;
  removeFromPlan: (id: string | number) => void;
  addToSaved: (exercise: IExercises) => void;
  removeFromSaved: (id: string | number) => void;
  isInPlan: (id: string | number) => boolean;
  isInSaved: (id: string | number) => boolean;
}

export const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  const [planList, setPlanList] = useState<IExercises[]>([]);
  const [savedList, setSavedList] = useState<IExercises[]>([]);

  const addToPlan = (exercise: IExercises) => {
    if (planList.some((item) => Number(item.id) === Number(exercise.id))) return;
    setPlanList((prev) => [...prev, exercise]);
  };

  const removeFromPlan = (id: string | number) => {
    setPlanList((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  const addToSaved = (exercise: IExercises) => {
    if (savedList.some((item) => Number(item.id) === Number(exercise.id))) return;
    setSavedList((prev) => [...prev, exercise]);
  };

  const removeFromSaved = (id: string | number) => {
    setSavedList((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  const isInPlan = (id: string | number) =>
    planList.some((item) => Number(item.id) === Number(id));

  const isInSaved = (id: string | number) =>
    savedList.some((item) => Number(item.id) === Number(id));

  const shared = {
    planList,
    setPlanList,
    savedList,
    setSavedList,
    addToPlan,
    removeFromPlan,
    addToSaved,
    removeFromSaved,
    isInPlan,
    isInSaved,
  };

  return <PlanContext.Provider value={shared}>{children}</PlanContext.Provider>;
};

export const usePlan = (): PlanContextType => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within an ExerciseProvider");
  }
  return context;
};

export default ExerciseProvider;