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
            {route !== '/' && <ChevronRight className="h-5"/>}
            <Link href={route}>
                <a
                    className="duration-150 px-2 py-1 hover:text-gray-600 hover:bg-gray-200 rounded"
                >
                    {crumb.title}
                </a>
            </Link>
        </>
    }

    return <div className="text-gray-500 text-sm border-gray-300 border-b">
        <div className="container mx-auto flex items-center py-2 px-6">
            {buildBreadcrumb(router.route)}
        </div>
    </div>;
};
