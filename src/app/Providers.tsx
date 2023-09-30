import { FC,ReactNode } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import Toast from 'react-native-toast-message';


interface ProviderProps {
    children: ReactNode | ReactNode[];
}

export const Providers: FC<ProviderProps> = ({children}) => {
    return (
        <AuthProvider>
            {children}
            <Toast />
        </AuthProvider>
    );
}