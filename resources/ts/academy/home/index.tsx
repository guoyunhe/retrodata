import React from "react";
import { Dashboard } from "../dashboard";
import { Welcome } from "../welcome";

export function Home() {
    if ((window as any).university) {
        return <Dashboard />;
    } else {
        return <Welcome />;
    }
}
