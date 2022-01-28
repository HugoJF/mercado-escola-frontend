import Link from "next/link";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import {Input} from "@components/input";
import {Button} from "@components/button";
import {CompactCentered} from "@components/layouts/compact-centered";
import {PageTitle} from "@components/text/page-title";
import {RegisterCredentials} from "@models/auth";
import {useDispatcher} from "@hooks/use-dispatcher";

export default function Register() {
    const {register, handleSubmit, formState: {isSubmitting, errors}} = useForm<RegisterCredentials>();
    const dispatch = useDispatcher();
    const router = useRouter();

    async function submit(credentials: RegisterCredentials) {
        try {
            await dispatch.auth.registration(credentials);
            await dispatch.auth.login({
                email: credentials.email,
                password: credentials.password,
            })
            await router.push('/')
        } catch (e: any) {
            // TODO type and handle errors
        }
    }

    return <CompactCentered>
        <form className="grid space-y-6" onSubmit={handleSubmit(submit)}>
            <PageTitle>Dados para registro</PageTitle>

            <Input
                placeholder="Nome completo"
                error={errors.name?.message}
                {...register('name', {required: true})}
            />
            <Input
                placeholder="Email"
                error={errors.email?.message}
                {...register('email', {required: 'Digite seu email'})}
            />
            <Input
                placeholder="Senha"
                type="password"
                error={errors.password?.message}
                {...register('password', {required: 'Digite sua senha'})}
            />

            <Button loading={isSubmitting} color="primary">Registrar</Button>

            <Link href="/login">
                <a className="block text-center" href="#">Já possui uma conta? <span className="text-orange-500">Clique aqui para entrar</span></a>
            </Link>
        </form>
    </CompactCentered>
}
