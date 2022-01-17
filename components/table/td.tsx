import {NextPage} from "next";
import clsx from "clsx";

type Props = {
    fit?: boolean;
}

export const Td: NextPage<Props> = ({fit = false, children}) => (
    <td className={clsx('p-3 border-b border-gray-300', {
        'w-1 whitespace-nowrap': fit,
    })}>
        {children}
    </td>
)
