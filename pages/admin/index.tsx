import {NextPage} from "next";
import Link from "next/link";
import {ShoppingBag, ShoppingCart, User, Users} from "react-feather";
import {PageTitle} from "@components/text/page-title";
import {LinkGroup} from "@components/link-group";
import {LinkGroupItem} from "@components/link-group-item";
import {WithHeader} from "@components/layouts/with-header";
import {Admin} from "@components/gates/admin";

const menu = [{
    title: 'Produtos',
    icon: ShoppingBag,
    links: [
        {title: 'Adicionar novo produto', href: '/admin/products/create'},
        {title: 'Ver todos os produtos', href: '/admin/products'}
    ]
}, {
    title: 'Produtores',
    icon: Users,
    links: [
        {title: 'Registrar novo produtor', href: '/admin/'}, // TODO
        {title: 'Ver todos os produtores', href: '/admin/'}, // TODO
    ]
}, {
    title: 'Aberturas',
    icon: ShoppingCart,
    links: [
        {title: 'Adicionar nova abertura', href: '/admin/openings/create'},
        {title: 'Ver aberturas pendentes', href: '/admin/openings'}, // TODO link to pendentes
        {title: 'Ver todas as aberturas', href: '/admin/openings'},
    ]
}, {
    title: 'Usuários',
    icon: User,
    links: [
        {title: 'Ver todos os usuários', href: '/admin/users'},
    ]
}];

const Home: NextPage = () => {
    return <Admin><WithHeader>
        <PageTitle>Administrativo</PageTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {menu.map(item => (
                <LinkGroup key={item.title} title={item.title} icon={item.icon}>
                    {item.links.map(link => (
                        <Link key={link.title} href={link.href}>
                            <LinkGroupItem>{link.title}</LinkGroupItem>
                        </Link>
                    ))}
                </LinkGroup>
            ))}
        </div>
    </WithHeader></Admin>
}
export default Home;
