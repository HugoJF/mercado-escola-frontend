import {NextPage} from "next";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import {Input} from "@components/input";
import {Button} from "@components/button";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {OpeningProperties} from "@models/openings";
import {useOpeningsCreate} from "@mutations/use-openings-create";

const AdminProductsCreate: NextPage = () => {
    const router = useRouter();
    const openingCreate = useOpeningsCreate();
    const {register, handleSubmit, formState: {isSubmitting, errors}} = useForm<OpeningProperties>();

    async function submit(credentials: OpeningProperties) {
        try {
            await openingCreate.mutateAsync(credentials);
            await router.push('/admin/openings')
        } catch (e: any) {
            // TODO type and handle errors
        }
    }

    return <UserLayout>
        <PageTitle>Registro de produto</PageTitle>

        <form className="grid gap-6" onSubmit={handleSubmit(submit)}>
            <div className="grid grid-cols-3 gap-6">
                {/* TODO min dates */}
                <Input
                    type="datetime-local"
                    placeholder="Data de fechamento"
                    error={errors.opens_at?.message}
                    {...register('opens_at', {required: 'Selecione a data de início da abertura'})}
                />
                <Input
                    type="datetime-local"
                    placeholder="Data de abertura"
                    error={errors.closes_at?.message}
                    {...register('closes_at', {required: 'Selecione a data de fim da abertura'})}
                />
                <Input
                    type="datetime-local"
                    placeholder="Data de entrega"
                    error={errors.delivers_at?.message}
                    {...register('delivers_at', {required: 'Selecione a data de entrega dos pedidos'})}
                />
            </div>
            <div className="grid grid-cols-2 gap-6">
                <Input
                    type="number"
                    min="0"
                    step="1"
                    placeholder="Quantidade de máxima de pedidos delivery"
                    error={errors.max_delivery_orders?.message}
                    {...register('max_delivery_orders', {required: 'Digite a quantidade máxima de pedidos de entrega'})}
                />
                <Input
                    type="number"
                    min="0"
                    step="1"
                    placeholder="Quantidade de máxima de pedidos retirada"
                    error={errors.max_pickup_orders?.message}
                    {...register('max_pickup_orders', {required: 'Digite a quantidade máxima de pedidos de retirada'})}
                />
            </div>
            <Input
                type="number"
                min="0"
                step="0.01"
                placeholder="Taxa de entrega"
                error={errors.delivery_fee?.message}
                {...register('delivery_fee', {required: 'Digite qual a taxa de entrega'})}
            />
            <Button loading={isSubmitting} color="primary">Salvar</Button></form>
    </UserLayout>
}
export default AdminProductsCreate
