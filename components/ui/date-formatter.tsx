import React, {FC, useMemo} from "react";
import {format as f, parseISO} from "date-fns";
import {ptBR} from "date-fns/locale";

type Props = {
    input: string;
    format: string;
}

export const DateFormatter: FC<Props> = ({input, format}) => {
    const date = useMemo(() => {
        return parseISO(input);
    }, [input]);

    return <>{f(date, format, {
        locale: ptBR
    })}</>
};
