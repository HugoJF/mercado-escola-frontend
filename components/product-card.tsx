import {PlusCircle} from "react-feather";
import {PriceFormatter} from "./ui/price-formatter";
import {FC, forwardRef} from "react";

type Props = {
    name: string;
    price: number;
    unit?: string;
    mediaUrl?: string;
    onClick?: () => void;
}

const ProductCard: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({name, price, onClick, unit = 'unidade', mediaUrl}, ref) => (
        <div
            ref={ref}
            onClick={onClick}
            className="p-6 bg-white border border-gray-300 rounded cursor-pointer"
        >
            {/* TODO image */}
            <img src={mediaUrl} alt={name} className="bg-gray-200 rounded aspect-square"/>
            {/* TODO product information */}
            <div className="space-y-2 mt-6">
                <h2>{name}</h2>
                <p>
                <span className="text-orange-500">
                    <PriceFormatter price={price}/>
                </span>
                    <span className="text-sm text-gray-700">
                    /{unit}
                </span>
                </p>
            </div>
            {/* TODO cart logic */}
            <div className="flex items-center justify-center space-x-3 mt-6 text-gray-500 text-sm">
                <PlusCircle/>
                <span>Adicionar ao carrinho</span>
            </div>
        </div>
    )
)

ProductCard.displayName = 'ProductCard';

export {ProductCard};
