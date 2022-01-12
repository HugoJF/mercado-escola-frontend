import {NextPage} from "next";

export const ListItemGroup: NextPage = ({children}) => (
    <div className="divide-y border border-gray-300 bg-white rounded">
        {children}
    </div>
)
