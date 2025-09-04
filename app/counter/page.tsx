'use client';

import { useState } from "react";

type Props = {
    onIncrement?: () => void;

}

export const IncrementButton = ({ onIncrement }: Props) => {
        return (
            <div onClick={onIncrement}>IncrementButton</div>
        )
}

export default function CounterPage() {
    // reaktivitas megvalositasahoz a useState hook-ot hasznaljuk
    const [count, setCount] = useState<number>(0);



    return (
        <main className="flex min-h-screen flex-col items-center justify-content bg-gray-100">
            <div className="space-y-6 rounded-2xl bg-white p-8 text-center shadow-xl">
                <h1 className="text-2xl font-semibold">Számláló: </h1>
                <p className="text-5xl font-bold text-red-700"> {count}</p>

                <button className=" curser-pointer rounded-2xl border p-3 font-demium shadow-lg rounded-2xl p-3" onClick={() => setCount(count + 1)}>Növel</button>
                <IncrementButton onIncrement={() => setCount(count + 1)}></IncrementButton>
            </div>
        </main>
    )
}