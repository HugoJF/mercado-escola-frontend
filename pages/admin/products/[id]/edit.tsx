import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import {Dropzone} from "@components/dropzone";
import {Input} from "@components/input";
import {ToggleGroup} from "@components/toggle-group";
import {Toggle} from "@components/toggle";
import {Button} from "@components/button";
import {Textarea} from "@components/textarea";
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import {ProductProperties, ProductType} from "@models/products";
import {FC, useState} from "react";
import {FileWithPreview} from "@models/forms";
import {SectionTitle} from "@components/section-title";
import {useProduct} from "@queries/use-product";
import {useProductUpdate} from "@mutations/use-product-update";
import {useProductDestroyMedia} from "@mutations/use-product-destroy-media";

type Props = {
    product: ProductType;
}

export default () => {
    const router = useRouter();
    const product = useProduct(router.query.id as string)

    return <UserLayout>
        {product.data?.data.data && <AdminProductsEdit product={product.data.data.data}/>}
    </UserLayout>
}

const AdminProductsEdit: FC<Props> = ({product}) => {
    const router = useRouter();
    const productUpdate = useProductUpdate(product.id);
    const productDestroyMedia = useProductDestroyMedia();
    const [files, setFiles] = useState<FileWithPreview[]>([])
    const [type, setType] = useState<'unit' | 'weight'>('unit');
    const {register, handleSubmit, watch, formState: {isSubmitting, errors}} = useForm<ProductProperties>({
        defaultValues: product,
    });

    async function submit(data: ProductProperties) {
        const form = new FormData;

        for (const [key, value] of Object.entries(data)) {
            form.append(key, String(value));
        }

        files.forEach(file => {
            form.append('images[]', file.file);
        });

        try {
            await productUpdate.mutateAsync(form);
            await router.push('/admin/products')
        } catch (e: any) {
            // TODO type and handle errors
        }
    }

    // TODO: add modal for confirmation
    async function handleDestroyMedia(mediaId: string) {
        await productDestroyMedia.mutateAsync({
            productId: product.id,
            mediaId: mediaId,
        })
    }

    return <>
        <PageTitle>Registro de produto</PageTitle>

        <form className="grid gap-6" onSubmit={handleSubmit(submit)}>
            <SectionTitle>Imagens do produto</SectionTitle>
            <Dropzone
                existingFiles={Object.entries(product.media_links).map(([key, value]) => ({
                    id: key,
                    preview: value,
                }))}
                removeExistingFile={file => handleDestroyMedia(file.id)}
                uploadingFiles={files}
                setUploadingFiles={files => setFiles(files)}
            />

            <Input
                type="text"
                placeholder="Nome do produto"
                error={errors.name?.message}
                {...register('name', {required: 'Nome do produto é obrigatório'})}
            />
            <Textarea
                placeholder="Descrição do produto"
                error={errors.description?.message}
                {...register('description', {required: 'Descrição do produto é obrigatório'})}
            />

            <ToggleGroup>
                <Toggle
                    id="unit"
                    value="unit"
                    onChange={() => setType('unit')}
                    checked={type === 'unit'}
                >
                    Por unidade
                </Toggle>
                <Toggle
                    id="weight"
                    value="weight"
                    onChange={() => setType('weight')}
                    checked={type === 'weight'}
                >
                    Por peso
                </Toggle>
            </ToggleGroup>

            {type === 'unit' && <div className="grid grid-cols-3 gap-6">
                <Input
                    placeholder="Nome da unidade no singular (ex: saco, pacote)"
                    error={errors.unit_name_singular?.message}
                    {...register('unit_name_singular', {required: 'Nome do produto no singular'})}
                />
                <Input
                    placeholder="Nome da unidade no plural (ex: sacos, pacotes)"
                    error={errors.unit_name_plural?.message}
                    {...register('unit_name_plural', {required: 'Nome do produto no plural'})}
                />
                <Input
                    placeholder="Preço da unidade (R$)"
                    error={errors.quantity_cost?.message}
                    {...register('quantity_cost', {required: 'Custo da unidade'})}
                />
            </div>}

            {type === 'weight' && <div className="grid grid-cols-2 gap-6">
                <Input
                    placeholder="Incremento de peso (kg)"
                    error={errors.quantity_step?.message}
                    {...register('quantity_step', {required: 'Incremento de peso'})}
                />
                <Input
                    placeholder="Preço por kg (R$)"
                    error={errors.quantity_cost?.message}
                    {...register('quantity_cost', {required: 'Custo por kilograma'})}
                />
            </div>}

            <Button loading={isSubmitting} color="primary">Salvar</Button>
        </form>
    </>
}
