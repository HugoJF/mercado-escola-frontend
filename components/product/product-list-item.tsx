import {FC} from "react";
import {PriceFormatter} from "@components/ui/price-formatter";
import {ProductType} from "@models/products";
import {Pivot} from "@models/global";

// todo fix PivotCartProductsUser + PivotOrderProduct
export type WithPivotQuantity = Pivot<{
    quantity: number;
    quantity_cost: number;
}>

type Props = {
    product: ProductType<WithPivotQuantity>;
}
export const ProductListItem: FC<Props> = ({product}) => {
    return <div className="flex gap-6 items-center">
        {/* Product image */}
        <img
            alt={product.name}
            src={Object.values(product.media_links)?.[0]}
            className="h-24 aspect-square rounded"
        />

        {/* Product details */}
        <div className="flex flex-col flex-grow">
            <h2>{product.name}</h2>
            <span className="text-gray-500">
                {product.pivot.quantity}
                {' '}
                {product.pivot.quantity === 1 ? product.unit_name_singular : product.unit_name_plural}
            </span>
            <span className="text-orange-500">
                <PriceFormatter price={product.pivot.quantity_cost * product.pivot.quantity}/>
            </span>
        </div>
    </div>
}
