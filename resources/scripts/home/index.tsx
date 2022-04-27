import axios from "axios";
import React, { useEffect } from "react";

export function Home() {
    useEffect(() => {
        axios.get("/api/games", { params: { page: 2, page_size: 10 } });
    }, []);
    return (
        <div>
            <h1>Admin Home</h1>
        </div>
    );
}
