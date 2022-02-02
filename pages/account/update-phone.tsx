import {useRouter} from "next/router";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {Button} from "@components/button";
import {PageTitle} from "@components/text/page-title";
import {Input} from "@components/input";
import {UserLayout} from "@components/layouts/user-layout";
import {useAuth} from "@helpers/selectors";

// TODO: move to /types
type PhoneUpdateForm = {
    phone: string;
}

export default function UpdatePhone() {
    const auth = useAuth();
    const router = useRouter();
    const dispatch = useDispatch();
    const {handleSubmit, register, formState: {isSubmitting}, setValue} = useForm<PhoneUpdateForm>();

    // TODO: figure out a better way to handle default values (container pattern)
    useEffect(() => {
        if (auth.me?.phone) {
            setValue('phone', auth.me.phone);
        }
    }, [setValue, auth.me?.phone]);

    async function updatePhone(data: PhoneUpdateForm) {
        // TODO: handle errors
        await dispatch.auth.update(data);
        await router.push('/account');
    }

    return <UserLayout>
        <PageTitle
            description="Esse número será utilizado apenas para confirmar seu pedido e em caso de problemas"
        >
            Telefone para contato
        </PageTitle>

        <form className="grid space-y-6" onSubmit={handleSubmit(updatePhone)}>
            <Input placeholder="Telefone para contato" {...register('phone')}/>

            <Button loading={isSubmitting} color="primary">Salvar</Button>
        </form>
    </UserLayout>
}
