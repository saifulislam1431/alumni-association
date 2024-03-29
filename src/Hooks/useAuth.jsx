import { useContext } from 'react';
import { UserAuth } from '../auth/Auth';

const useAuth = () => {
    const auth = useContext(UserAuth)
    return auth;
};

export default useAuth;