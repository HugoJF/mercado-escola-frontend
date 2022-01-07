import {NextPage} from "next";
import {ChevronRight} from "react-feather";

const breadcrumb = [{
    label: "Components",
    href: "/components",
}, {
    label: "Breadcrumb",
    href: "/breadcrumb",
}];

export const Breadcrumb: NextPage = () => {
    return <div className="flex items-center space-x-1 py-2 px-6 text-gray-400 text-sm border-gray-300 border-b">
        <a
            className="duration-150 px-2 py-1 hover:text-gray-500 hover:bg-gray-200 rounded"
            href="#" /* TODO home link */
        >
            Início
        </a>

        {breadcrumb.map(crumb => <>
            <ChevronRight/>
            <a className="duration-150 px-2 py-1 hover:text-gray-500 hover:bg-gray-200 rounded"
               href={crumb.href}>{crumb.label}</a>
        </>)}
    </div>;
};
