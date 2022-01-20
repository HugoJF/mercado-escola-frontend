import {Input} from "../components/input";
import {Button} from "../components/button";
import {BigTitle} from "../components/text/big-title";
import {CompactCentered} from "../components/layouts/compact-centered";
import {useAuth} from "../helpers/selectors";
import {useDispatch} from "react-redux";
import {Dispatch} from "../stores/store";
import {LoginCredentials} from "../types/auth";
import {useFormy} from "../helpers/formy";
import {useForm} from "react-hook-form";

export default function Login() {
    const auth = useAuth();
    const dispatch = useDispatch<Dispatch>();
    const {register, watch, handleSubmit, formState: {errors}} = useForm<LoginCredentials>();

    async function login(credentials: LoginCredentials) {
        try {
            await dispatch.auth.login(credentials);
            alert('done')
        } catch (e: any) {
            // TODO type and handle errors
            // setErrors(e.response.data.errors);
        }
    }

    const failed = auth?.failed;

    return <CompactCentered>
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

            {/* TODO link */}
            <a className="text-orange-500 text-right" href="#">Esqueceu a sua senha?</a>
            <Button color="primary">Entrar</Button>

            {/* TODO link */}
            <a className="block text-center" href="#">Ainda não possui uma conta? <span className="text-orange-500">Registre-se clicando aqui</span></a>
        </form>
    </CompactCentered>
}
