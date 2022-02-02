import {NextPage} from "next";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import {Input} from "@components/input";
import {Button} from "@components/button";
import {ListItem} from "@components/list-item";
import {ListItemGroup} from "@components/list-item-group";
import {useProducts} from "@queries/use-products";
import {useMemo, useState} from "react";

const ProductsIndex: NextPage = () => {
    const products = useProducts();
    const [filter, setFilter] = useState('');

    const filteredProducts = useMemo(() => {
        return products.data?.data.data.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()));
    }, [filter, products]);

    return <UserLayout>
        <PageTitle>Lista de produtos</PageTitle>
        <div className="w-full flex gap-6">
            <Input
                value={filter}
                onChange={e => setFilter(e.target.value)}
                placeholder="Busca de produto por nome"
                className="flex-grow"
            />
            <Button color="primary">Adicionar produto</Button>
        </div>

        {/* TODO: empty state for list item group */}
        <ListItemGroup>
            {filteredProducts?.map(product => (
                <ListItem
                    title={product.name}
                    /* TODO missing image count + price format */
                    description={'R$' + product.quantity_cost / 100 + '/' + product.unit_name_singular}
                />
            ))}
        </ListItemGroup>
    </UserLayout>
}
export default ProductsIndex
