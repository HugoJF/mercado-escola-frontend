import {NextPage} from "next";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import {Dropzone} from "@components/dropzone";
import {Input} from "@components/input";
import {ToggleGroup} from "@components/toggle-group";
import {Toggle} from "@components/toggle";
import {Button} from "@components/button";
import {Textarea} from "@components/textarea";

const AdminProductsCreate: NextPage = () => {
    return <UserLayout className="grid">
        <PageTitle>Registro de produto</PageTitle>

        <Dropzone/>
        <Input placeholder="Nome do produto"/>
        <Textarea placeholder="Descrição do produto"/>
        <ToggleGroup>
            <Toggle name="type" id="unit" checked>Por unidade</Toggle>
            <Toggle name="type" id="weight">Por peso</Toggle>
        </ToggleGroup>
        <div className="grid grid-cols-3 gap-6">
            <Input placeholder="Nome da unidade no singular (ex: saco, pacote)"/>
            <Input placeholder="Nome da unidade no plural (ex: sacos, pacotes)"/>
            <Input placeholder="Preço da unidade (R$)"/>
        </div>
        <Button color="primary">Salvar</Button>
    </UserLayout>
}
export default AdminProductsCreate
