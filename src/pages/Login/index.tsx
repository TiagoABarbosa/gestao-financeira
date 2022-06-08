import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.email);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    };

    return (
        <C.Container>
            <C.Header>
                <C.HeaderText>Gestão Financeira</C.HeaderText>
                <C.Button onClick={() => signInWithGoogle()} disabled={authing}>Logar com o Google</C.Button>
            </C.Header>
        </C.Container>
    );
};

export default LoginPage;

function user(user: any) {
    throw new Error('Function not implemented.');
}
