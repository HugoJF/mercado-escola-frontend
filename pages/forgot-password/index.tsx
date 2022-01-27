import {CompactCentered} from "../../components/layouts/compact-centered";
import {PageTitle} from "../../components/text/page-title";
import {useForm} from "react-hook-form";
import {useDispatcher} from "../../hooks/use-dispatcher";
import {useRouter} from "next/router";
import {Input} from "../../components/input";
import {Button} from "../../components/button";

type Form = {
    email: string;
}

export default function ForgotPasswordIndex() {
    const {register, handleSubmit, formState: {isSubmitting, errors}} = useForm<Form>();
    const dispatch = useDispatcher();
    const router = useRouter();

    async function submit(data: Form) {
        await dispatch.auth.forgotPassword(data.email);
        router.push('/forgot-password/sent')
    }

    return <CompactCentered>
        <form className="grid space-y-6" onSubmit={handleSubmit(submit)}>
            <PageTitle
                description="Enviaremos um email contendo instruções para trocar a senha de sua conta."
            >
                Esqueci minha senha
            </PageTitle>

            <Input
                placeholder="Digite o email da sua conta"
                type="email"
                {...register('email', {required: true})}
            />

            <Button loading={isSubmitting} color="primary">Enviar instruções</Button>
        </form>
    </CompactCentered>
}
