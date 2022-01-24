import {NextPage} from "next";
import {useEffect} from "react";
import {useDispatcher} from "../hooks/use-dispatcher";

const Global: NextPage = ({children}) => {
    const dispatch = useDispatcher();

    useEffect(() => {
        dispatch.auth.csrf();
        dispatch.auth.me();
    }, [])

    return <>{children}</>;
}
export default Global;
