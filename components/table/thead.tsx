import {NextPage} from "next";

export const Thead: NextPage = ({children}) => (
    <thead className="border-b border-gray-300">
        {children}
    </thead>
)
