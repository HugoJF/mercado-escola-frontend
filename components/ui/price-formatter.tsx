import {NextPage} from "next";

const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});

type Props = {
    price: number;
}

export const PriceFormatter: NextPage<Props> = ({price}) => (
    <>{formatter.format(price)}</>
);
