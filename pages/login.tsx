import {Input} from "../components/input";
import {Button} from "../components/button";
import {BigTitle} from "../components/text/big-title";
import {CompactCentered} from "../components/layouts/compact-centered";
import {useAuth} from "../helpers/selectors";
import {useDispatch} from "react-redux";
import {Dispatch} from "../stores/store";
import {LoginCredentials} from "../types/auth";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import Link from "next/link";
import {Guest} from "../components/gates/guest";

export default function Login() {
    const auth = useAuth();
    const router = useRouter();
    const dispatch = useDispatch<Dispatch>();
    const {register, handleSubmit, formState: {errors}} = useForm<LoginCredentials>();

    async function login(credentials: LoginCredentials) {
        try {
            await dispatch.auth.login(credentials);
            await router.push('/')
        } catch (e: any) {
            // TODO type and handle errors
        }
    }

    return <Guest><CompactCentered>
        <form className="grid px-6 space-y-6" onSubmit={handleSubmit(login)}>
            <BigTitle>MercadoEscola</BigTitle>

            <Input
                placeholder="Email"
                error={errors.email?.message}
                {...register('email', {required: 'Digite seu email'})}
            />
            <Input
                type="password"
                placeholder="Senha"
                error={errors.password?.message}
                {...register('password', {required: 'Digite a sua senha'})}
            />

            <Link href="/forgot-password">
                <a className="text-orange-500 text-right" href="#">Esqueceu a sua senha?</a>
            </Link>

            <Button color="primary">Entrar</Button>

            <Link href="/register">
                <a className="block text-center">Ainda não possui uma conta? <span className="text-orange-500">Registre-se clicando aqui</span></a>
            </Link>
        </form>
    </CompactCentered></Guest>
}
