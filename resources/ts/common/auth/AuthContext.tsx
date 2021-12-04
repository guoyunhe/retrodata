import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { User } from "../users/User";

export interface AuthProps {
    user: User | null;
    setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthProps>({
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
    }, [user]);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
