import {FC, useEffect} from "react";
import {useRouter} from "next/router";
import {useAuth} from "@helpers/selectors";

export const Guest: FC = ({children}) => {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.me) {
            router.push('/');
        }
    }, [auth])

    // TODO maybe splash?
    return <>
        {!auth.me && children}
    </>
};
