import Link from "next/link";


const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#0c0d10] px-4 text-center text-white md:px-8">
            <main className="mx-auto max-w-md space-y-6">
                {/* Accent Tag */}
                <div className="inline-block rounded-full border border-zinc-800 bg-[#121418] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#B5F200]">
                    404 Error
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                        PAGE NOT FOUND
                    </h1>
                    <p className="text-xs text-zinc-400">
                        Looks like this lift doesn{"'"}t exist or has been moved. Get back on track below.
                    </p>
                </div>

                {/* Call to Action Button */}
                <div className="pt-2">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full bg-[#B5F200] px-6 py-2.5 text-xs font-black uppercase tracking-wide text-black transition-all hover:bg-[#a3db00]"
                    >
                        ← Back to Workouts
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default NotFound;