import {NextPage} from "next";
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
import {ProductProperties} from "@models/products";
import {useProductCreate} from "@mutations/use-product-create";
import {useState} from "react";
import {FileWithPreview} from "@models/forms";
import {SectionTitle} from "@components/section-title";

const AdminProductsCreate: NextPage = () => {
    const router = useRouter();
    const productCreate = useProductCreate();
    const [files, setFiles] = useState<FileWithPreview[]>([])
    const {register, handleSubmit, watch, formState: {isSubmitting, errors}} = useForm<ProductProperties>({
        defaultValues: {type: 'unit'}
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
            await productCreate.mutateAsync(form);
            await router.push('/admin/products')
        } catch (e: any) {
            // TODO type and handle errors
        }
    }

    return <UserLayout>
        <PageTitle>Registro de produto</PageTitle>

        <form className="grid gap-6" onSubmit={handleSubmit(submit)}>
            <SectionTitle>Imagens do produto</SectionTitle>
            <Dropzone
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
                    {...register('type')}
                >
                    Por unidade
                </Toggle>
                <Toggle
                    id="weight"
                    value="weight"
                    {...register('type')}
                >
                    Por peso
                </Toggle>
            </ToggleGroup>

            {watch('type') === 'unit' && <div className="grid grid-cols-3 gap-6">
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

            {watch('type') === 'weight' && <div className="grid grid-cols-2 gap-6">
                <Input
                    placeholder="Incremento de peso (kg)"
                    error={errors.weight_increment?.message}
                    {...register('weight_increment', {required: 'Incremento de peso'})}
                />
                <Input
                    placeholder="Preço por kg (R$)"
                    error={errors.quantity_cost?.message}
                    {...register('quantity_cost', {required: 'Custo por kilograma'})}
                />
            </div>}

            <Button loading={isSubmitting} color="primary">Salvar</Button>
        </form>
    </UserLayout>
}
export default AdminProductsCreate
