import {OpeningType} from "./openings";
import {AddressType} from "./addresses";
import {ProductType} from "./products";
import {Pivot} from "@models/global";

// todo check against PivotOrderProduct
export type PivotCartProductsUser = Pivot<{
    holder_id: number;
    holder_type: string;
    quantity: number;
    quantity_cost: number;
    product_id: number;
}>

export type CartType = {
    cost: number;
    opening: OpeningType;
    address: AddressType | null;
    products: ProductType<PivotCartProductsUser>[];
};
