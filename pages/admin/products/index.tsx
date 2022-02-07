import {NextPage} from "next";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import {Input} from "@components/input";
import {Button} from "@components/button";
import {ListItem} from "@components/list-item";
import {ListItemGroup} from "@components/list-item-group";
import {useProducts} from "@queries/use-products";
import {useMemo, useState} from "react";
import {ProductType} from "@models/products";

type Props = {
    products: ProductType[];
}

export default () => {
    const products = useProducts();

    return <UserLayout>
        {products.data?.data.data && <ProductsIndex products={products.data.data.data}/>}
    </UserLayout>
}

const ProductsIndex: NextPage<Props> = ({products}) => {
    const [filter, setFilter] = useState('');

    const filteredProducts = useMemo(() => {
        return products.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()));
    }, [filter, products]);

    return <>
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
    </>
}
