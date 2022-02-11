import {NextPage} from "next";
import Link from "next/link";
import {useRouter} from "next/router";
import {ReactNode} from "react";
import {ChevronRight} from "react-feather";
import {Breadcrumbs} from "@models/breadcrumbs";
import Head from "next/head";

const bc: Breadcrumbs = {
    '/': {title: 'Início'},
    '/logout': {title: 'Sair', root: '/'},
    '/cart': {title: 'Carrinho', root: '/'},
    '/admin': {title: 'Administrativo', root: '/'},
    '/products/[id]': {title: 'Produto', root: '/'},
    '/orders': {title: 'Pedidos', root: '/'},
    '/orders/[id]': {title: 'Pedido', root: '/orders'},
    '/orders/[id]/success': {title: 'Pedido realizado', root: '/orders/[id]'},
    '/account': {title: 'Minha conta', root: '/'},
    '/account/update-phone': {title: 'Atualizando número de telefone', root: '/account'},
    '/account/addresses': {title: 'Endereços', root: '/account'},
    '/account/addresses/new': {title: 'Adicionando um novo endereço', root: '/account/addresses'},
    '/account/addresses/confirm': {title: 'Confirmando endereço', root: '/account/addresses'},
    '/admin/products': {title: 'Produtos', root: '/admin'},
    '/admin/products/create': {title: 'Registrando novo produto', root: '/admin/products'},
    '/admin/products/[id]/edit': {title: 'Editando produto', root: '/admin/products'},
    '/admin/openings': {title: 'Aberturas', root: '/admin'},
    '/admin/openings/create': {title: 'Registrando nova abertura', root: '/admin/openings'},
    '/admin/openings/[id]': {title: 'Abertura', root: '/admin/openings'},
    '/admin/users': {title: 'Usuários', root: '/admin'},
}

export const Breadcrumb: NextPage = () => {
    const router = useRouter();

    const current = bc[router.route];
    const title = current?.title;

    function buildBreadcrumb(route: string): ReactNode {
        const crumb = bc[route];

        if (!crumb) {
            throw new Error(`Missing breadcrumb for route ${route}`);
        }

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

    // TODO maybe split breadcrumb from title + route config file
    return <>
        <Head>
            {title && <title>{title} - Mercado Escola</title>}
            {!title && <title>Mercado Escola</title>}
        </Head>
        <div className="text-gray-500 text-sm border-gray-300 border-b">
        <div className="container mx-auto flex items-center py-2 px-6">
            {buildBreadcrumb(router.route)}
        </div>
    </div>
    </>;
};
