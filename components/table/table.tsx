import {NextPage} from "next";

export const Table: NextPage = ({children}) => (
    <table className="w-full">
        {children}
    </table>
)
