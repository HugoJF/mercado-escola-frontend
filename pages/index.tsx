import {NextPage} from "next";
import Link from "next/link";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import {useCurrentOpening} from "@queries/use-current-opening";
import {ProductCard} from "@components/product-card";
import {ProductDeck} from "@components/product-deck";
import {OpeningType} from "@models/openings";

type Props = {
    currentOpening: OpeningType;
};

export default () => {
    const opening = useCurrentOpening();

    return <UserLayout>
        {opening.data?.data.data && <Index currentOpening={opening.data.data.data}/>}
    </UserLayout>
}
const Index: NextPage<Props> = ({currentOpening}) => {
    return <>
        <PageTitle>Produtos</PageTitle>

        <ProductDeck>
            {currentOpening.products.map(product => (
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
    </>
}
