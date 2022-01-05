import {NextPage} from "next";

export const LinkGroupItem: NextPage = ({children}) => {
    return <li className="duration-150 px-4 py-3 hover:bg-gray-100 cursor-pointer rounded">
        {children}
    </li>;
};
