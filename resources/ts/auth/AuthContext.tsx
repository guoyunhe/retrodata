import React, { useState, useContext, ReactNode, useEffect } from "react";
import { User } from "../types/user";
import { updateUser } from "./services/updateUser";

export interface AuthProps {
    user: User | null;
    setUser: (user: User | null) => void;
}

const AuthContext = React.createContext<AuthProps>({
    user: null,
    setUser: (user: User | null) => {},
});

export interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>((window as any).user);
    useEffect(() => {
        (window as any).user = user;
        if (user) {
            updateUser(user);
        }
    }, [user]);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

/**
 * Auth hook for function components
 */
export function useAuth() {
    return useContext(AuthContext);
}
