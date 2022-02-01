import {NextPage} from "next";
import {useRouter} from "next/router";
import {WithHeader} from "@components/layouts/with-header";
import {useProduct} from "@queries/use-product";
import {PageTitle} from "@components/text/page-title";
import {Button} from "@components/button";
import {SectionTitle} from "@components/section-title";
import {PriceFormatter} from "@components/ui/price-formatter";

const ProductShow: NextPage = () => {
    const router = useRouter();
    const product = useProduct(router.query.id as string);

    return <WithHeader className="grid">
        {/* TODO needs full rework */}
        <div className="w-full max-h-64 overflow-hidden rounded">
            <img
                className="w-full"
                src={Object.values(product.data?.data.data.media_links ?? {})?.[0]}
                alt={product.data?.data.data.name}
            />
        </div>

        <PageTitle>{product.data?.data.data.name}</PageTitle>
        <SectionTitle>Descrição</SectionTitle>
        <p>{product.data?.data.data.description}</p>

        <div>
            <span className="text-orange-500">
                <PriceFormatter price={product.data?.data.data.quantity_cost!}/>
            </span>
            <span className="text-sm">/{product.data?.data.data.unit_name_singular}</span>
        </div>
        <Button color="primary">
            Adicionar ao carrinho
        </Button>
    </WithHeader>
}
export default ProductShow
