import React from "react";
import { Dashboard } from "../dashboard/Dashboard";
import { Landing } from "../landing/Landing";

export default function Home() {
    if ((window as any).university) {
        return <Dashboard />;
    } else {
        return <Landing />;
    }
}
