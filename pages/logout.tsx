import {useRouter} from "next/router";
import {useEffect} from "react";
import {Loader} from "react-feather";
import {UserLayout} from "@components/layouts/user-layout";
import {useDispatcher} from "@hooks/use-dispatcher";

export default function Login() {
    const router = useRouter();
    const dispatch = useDispatcher();

    useEffect(() => {
        logout()
    }, [])

    async function logout() {
        try {
            await dispatch.auth.logout();
            await dispatch.auth.me();
            await router.push('/login')
        } catch (e: any) {
            // TODO type and handle errors
        }
    }

    return <UserLayout className="flex justify-center">
        <Loader className="animate-spin"/>
    </UserLayout>
}
