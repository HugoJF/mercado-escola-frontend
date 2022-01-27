import {LoginCredentials} from "../types/auth";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {WithHeader} from "../components/layouts/with-header";
import {Authed} from "../components/gates/authed";
import {Loader} from "react-feather";
import {useDispatcher} from "../hooks/use-dispatcher";

export default function Login() {
    const router = useRouter();
    const dispatch = useDispatcher();

    useEffect(() => {
        logout()
    }, [])

    async function logout() {
        try {
            await dispatch.auth.logout();
            await router.push('/login')
        } catch (e: any) {
            // TODO type and handle errors
        }
    }

    return <Authed><WithHeader className="flex justify-center">
        <Loader className="animate-spin"/>
    </WithHeader></Authed>
}
