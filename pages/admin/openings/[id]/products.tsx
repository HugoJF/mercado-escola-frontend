import {NextPage} from "next";
import {UserLayout} from "@components/layouts/user-layout";
import {useOpening} from "@queries/use-opening";
import {useRouter} from "next/router";
import {OpeningType} from "@models/openings";
import {PageTitle} from "@components/text/page-title";
import {Input} from "@components/input";
import {Thead} from "@components/table/thead";
import {TheadTd} from "@components/table/thead-td";
import {Tbody} from "@components/table/tbody";
import {Tr} from "@components/table/tr";
import {Td} from "@components/table/td";
import {Table} from "@components/table/table";
import {useProducts} from "@queries/use-products";
import {ProductType} from "@models/products";
import {ProductListItem} from "@components/product/product-list-item";
import {Button} from "@components/button";
import {useOpeningsRemoveProduct} from "@mutations/use-openings-remove-product";
import {useOpeningsAddProduct} from "@mutations/use-openings-add-product";

type Props = {
    opening: OpeningType;
    products: ProductType[];
}

export default function AdminOpeningProductsContainer() {
    const router = useRouter();
    const opening = useOpening(router.query.id as string)
    const products = useProducts();

    return <UserLayout className="grid">
        {opening.data?.data.data && products.data?.data.data && <AdminOpeningProducts
            opening={opening.data.data.data}
            products={products.data.data.data}
        />}
    </UserLayout>
}

// TODO: activate and deactivate buttons should also check for useProducts() loading state
const AdminOpeningProducts: NextPage<Props> = ({opening, products}) => {
    const addProduct = useOpeningsAddProduct();
    const removeProduct = useOpeningsRemoveProduct();

    function inOpening(product: ProductType) {
        return opening.products.some(_product => _product.id === product.id);
    }

    async function handleRemoveProduct(product: ProductType) {
        await removeProduct.mutateAsync({
            productId: product.id,
            openingId: opening.id,
        })
    }

    async function handleAddProduct(product: ProductType) {
        await addProduct.mutateAsync({
            productId: product.id,
            openingId: opening.id,
        })
    }

    return <>
        <PageTitle>Abertura {opening.id}</PageTitle>

        <Input/>

        <Table>
            <Thead>
                <TheadTd>Produto</TheadTd>
                <TheadTd>Habilitado</TheadTd>
            </Thead>
            <Tbody>
                {products.map(product => (
                    <Tr key={product.id}>
                        <Td>
                            <ProductListItem product={product}/>
                        </Td>
                        <Td fit>
                            {inOpening(product) && <Button
                                color="danger"
                                onClick={() => handleRemoveProduct(product)}
                                loading={removeProduct.isLoading && removeProduct?.variables?.productId === product.id}
                            >
                                Desativar
                            </Button>}
                            {!inOpening(product) && <Button
                                color="primary"
                                onClick={() => handleAddProduct(product)}
                                loading={addProduct.isLoading && addProduct?.variables?.productId === product.id}
                            >
                                Ativar
                            </Button>}
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    </>
}

AdminOpeningProducts.displayName = 'AdminOpeningProducts';
