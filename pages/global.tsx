import {NextPage} from "next";
import {useEffect, useState} from "react";
import {useDispatcher} from "../hooks/use-dispatcher";
import {load} from "../library/google";

const Global: NextPage = ({children}) => {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatcher();

    useEffect(() => {
        dispatch.auth.csrf();
        dispatch.auth.me();
        load().then(() => setLoaded(true));
    }, [])

    // TODO: better loading state
    if (!loaded) {
        return <></>
    }

    return <>{children}</>;
}
export default Global;
