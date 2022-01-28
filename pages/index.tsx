import {NextPage} from "next";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useAuth} from "@helpers/selectors";

const Index: NextPage = () => {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.me) {
            router.push('/admin'); // TODO should be /
        } else {
            router.push('login');
        }
    })
    return <></> // TODO: render something
}
export default Index
