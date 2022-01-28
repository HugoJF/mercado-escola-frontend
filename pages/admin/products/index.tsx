import {NextPage} from "next";
import {WithHeader} from "@components/layouts/with-header";
import {PageTitle} from "@components/text/page-title";
import {Input} from "@components/input";
import {Button} from "@components/button";
import {ListItem} from "@components/list-item";
import {ListItemGroup} from "@components/list-item-group";

const ProductsIndex: NextPage = () => {
    return <WithHeader>
        <PageTitle>Lista de produtos</PageTitle>
        <div className="w-full flex gap-6">
            <Input placeholder="Busca de produto por nome" className="flex-grow"/>
            <Button color="primary">Adicionar produto</Button>
        </div>
        <ListItemGroup>
            {[1, 2, 3, 4, 5].map(() => (
                <ListItem
                    title="Abobrinha"
                    description="R$ 5,00/pacote · 3 imagens"
                />
            ))}
        </ListItemGroup>
    </WithHeader>
}
export default ProductsIndex
