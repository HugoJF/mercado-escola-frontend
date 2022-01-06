import {NextPage} from "next";

export const Td: NextPage = ({children}) => (
    <td className="p-3 border-b border-gray-300">
        {children}
    </td>
)
