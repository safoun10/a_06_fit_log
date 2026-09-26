
import AllExercises from "@/components/AllExercises";

import Hero from "@/components/Hero";
import { Suspense } from "react";


const App = () => {
    return (
        <div>

            <Hero></Hero>
            <Suspense fallback={
                <span className="loading loading-spinner text-neutral"></span>
            }>
                <AllExercises></AllExercises>
            </Suspense>

        </div>
    );
};

export default App;