import React, {FC, useMemo} from "react";
import {format as f, parseISO} from "date-fns";
import {ptBR} from "date-fns/locale";
import {ProductType} from "@models/products";

type Props = {
    quantity: number;
    product: ProductType;
}

export const QuantityFormatter: FC<Props> = ({quantity, product}) => {
    const word = quantity === 1 ? product.unit_name_singular : product.unit_name_plural;

    return <>{quantity} {word ?? 'unidade'}</>
};
