'use client';

import { useState } from "react";


export default function CounterPage() {
    // reaktivitas megvalositasahoz a useState hook-ot hasznaljuk
    const [count, setCount] = useState(0);



    return (
        <div className="flex min-h-screen items-center justify-center">
            <h1 className="text-2xl font-semibold">Számláló: </h1>
            <p className="text-5xl font-bold"> {count}</p>
            <button className="button font-demium shadow-lg rounded-2xl p-3" onClick={() => setCount(count + 1)}>Növel</button>
        </div>
    )
}