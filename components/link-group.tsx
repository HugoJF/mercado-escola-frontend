import {NextPage} from "next";
import {Icon} from "react-feather";

type Props = {
    icon: Icon;
    title: string;
}

export const LinkGroup: NextPage<Props> = ({title, icon: Icon, children}) => {
    return <div className="p-6 bg-white border border-gray-300 rounded">
        <div className="flex space-x-4">
            <Icon className="text-gray-500"/>
            <span>{title}</span>
        </div>
        <hr className="mt-4 mb-1 border-gray-300"/>
        <ul className="text-sm text-gray-700">
            {children}
        </ul>
    </div>;
};
