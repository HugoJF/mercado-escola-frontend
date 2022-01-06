import {NextPage} from "next";

export const Tbody: NextPage = ({children}) => (
    <tbody className="border-b border-gray-300">
        {children}
    </tbody>
)
