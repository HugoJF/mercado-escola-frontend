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
    return <div className="flex items-center py-3 px-6 text-gray-400 text-sm border-gray-300 border-b">
        <a>Início</a>

        {breadcrumb.map(crumb => <>
            <ChevronRight/>
            <a href={crumb.href}>{crumb.label}</a>
        </>)}
    </div>;
};
