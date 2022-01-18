import {NextPage} from "next";
import {ChevronRight} from "react-feather";
import Link from "next/link";
import {useRouter} from "next/router";
import {ReactNode} from "react";

type Breadcrumbs = {
    [key: string]: {
        title: string,
        root?: string,
    };
}

const bc: Breadcrumbs = {
    '/': {title: 'Início'},
    '/admin': {title: 'Administrativo', root: '/'},
    '/admin/products': {title: 'Produtos', root: '/admin'},
    '/admin/products/create': {title: 'Registrando novo produto', root: '/admin/products'},
}

export const Breadcrumb: NextPage = () => {
    const router = useRouter();

    function buildBreadcrumb(route: string): ReactNode {
        const crumb = bc[route];

        return <>
            {crumb.root && buildBreadcrumb(crumb.root)}
            {route !== '/' && <ChevronRight/>}
            <a
                className="duration-150 px-2 py-1 hover:text-gray-500 hover:bg-gray-200 rounded"
                href={route}
            >
                {crumb.title}
            </a>
        </>
    }

    return <div className="flex items-center space-x-1 py-2 px-6 text-gray-400 text-sm border-gray-300 border-b">
        {buildBreadcrumb(router.route)}
    </div>;
};
