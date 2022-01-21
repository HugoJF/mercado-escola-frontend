import {FC, useEffect} from "react";
import {useAuth} from "../../helpers/selectors";
import {useRouter} from "next/router";

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
