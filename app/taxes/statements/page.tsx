"use client";

import { useEffect } from "react";
import { analytics, app } from "../../lib/firebase";


export default function Home() {

    useEffect(() => {
        // Beispiel: Firebase Analytics verwenden
        console.log("Firebase App:", app);
        console.log("Firebase Analytics:", analytics);
    }, []);
    return (
        <div>
            Tax Statements
        </div>
    );
}