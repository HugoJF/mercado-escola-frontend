import {FC} from "react";
import {ProductListItem, WithPivotQuantity} from "@components/product/product-list-item";
import {ProductType} from "@models/products";
import clsx from "clsx";

type Props = {
    products: ProductType<WithPivotQuantity>[];
    compact?: boolean;
    onClick?: (product: ProductType) => void;
}

export const ProductList: FC<Props> = ({products, compact = false, onClick, children}) => {
    return <ul className={clsx('p-6 gap-6', {
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3': compact,
        'flex flex-col': !compact,
    })}>
        {products.map(product => (
            <li
                className={clsx('flex gap-6 justify-between', {
                    'cursor-pointer': onClick,
                })}
                onClick={() => onClick && onClick(product)}
            >
                <ProductListItem product={product}/>

                {/* Product controls */}
                {!compact && children}
            </li>
        ))}
    </ul>
}
