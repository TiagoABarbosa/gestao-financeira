import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

export interface IAuthRouteProps {}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const { children }: any = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const AuthCheck = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
            } else {
                console.log('Não Autorizado - Necessário Login');
                navigate('/login');
            }
        });

        return () => AuthCheck();
    }, [auth]);

    if (loading) return <p>Carregando ...</p>;

    return <>{children}</>;
};

export default AuthRoute;

function setUser(storageUser: string) {
    throw new Error("Function not implemented.");
}
