import {NextPage} from "next";
import Link from "next/link";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import {useCurrentOpening} from "@queries/use-current-opening";
import {ProductCard} from "@components/product-card";
import {ProductDeck} from "@components/product-deck";

const Index: NextPage = () => {
    const opening = useCurrentOpening();

    return <UserLayout>
        <PageTitle>Produtos</PageTitle>

        <ProductDeck>
            {opening.data?.data.data.products.map(product => (
                <Link href={`products/${product.id}`}>
                    <ProductCard
                        name={product.name}
                        price={product.quantity_cost}
                        unit={product.unit_name_singular}
                        mediaUrl={Object.values(product.media_links)?.[0]}
                    />
                </Link>
            ))}
        </ProductDeck>
    </UserLayout>
}
export default Index
