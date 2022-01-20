import {NextPage} from "next";
import {WithHeader} from "../../../components/layouts/with-header";
import {PageTitle} from "../../../components/text/page-title";
import {Input} from "../../../components/input";
import {Button} from "../../../components/button";

const AdminProductsCreate: NextPage = () => {
    return <WithHeader className="grid">
        <PageTitle>Registro de produto</PageTitle>

        <div className="grid grid-cols-3 gap-6">
            <Input placeholder="Data de fechamento"/>
            <Input placeholder="Data de abertura"/>
            <Input placeholder="Data de entrega"/>
        </div>
        <div className="grid grid-cols-2 gap-6">
            <Input placeholder="Quantidade de máxima de pedidos delivery"/>
            <Input placeholder="Quantidade de máxima de pedidos retirada"/>
        </div>
        <Input placeholder="Taxa de entrega"/>
        <Button color="primary">Salvar</Button>
    </WithHeader>
}
export default AdminProductsCreate
