import {FC, useEffect} from "react";
import {useRouter} from "next/router";
import {useAuth} from "@helpers/selectors";

// TODO: need admin check
export const Admin: FC = ({children}) => {
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
