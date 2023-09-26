import { FC,createContext,ReactNode,useContext  } from "react";

interface AuthContextProps {}
interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({});



export const useAuth = () => useContext(AuthContext);


export const AuthProvider: FC<AuthProviderProps> = ({children}) => {
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
} 