"use client";

import { useFormStatus } from "react-dom";

function AnalyseButton() {
    const { pending } = useFormStatus();

    return (
        <button type="submit" disabled={pending} className="px-6 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-700 foxus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 diabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium">
            {pending ? 'Analysing...' : 'Analyse'}
        </button>
    )
}

export default AnalyseButton