"use client";
import React, { useState } from "react";
import Introduction from "@/components/general/introduction";
export default function Home() {
    const [flag, setFlag] = useState(0);

    return (
        <div className="w-screen   flex  flex-col items-center justify-center overflow-hidden">
            <main className="w-screen max-w-7xl flex flex-col items-center relative ">
                <Introduction />
            </main>
        </div>
    );
}
