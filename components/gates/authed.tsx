import {FC, useEffect} from "react";
import {useRouter} from "next/router";
import {useAuth} from "@helpers/selectors";

export const Authed: FC = ({children}) => {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!auth.me) {
            router.push('/login');
        }
    }, [auth])

    // TODO maybe splash?
    return <>
        {auth.me && children}
    </>
};
