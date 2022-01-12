import {NextPage} from "next";
import {PageTitle} from "../../components/text/page-title";
import {LinkGroup} from "../../components/link-group";
import {ShoppingBag, ShoppingCart, User, Users} from "react-feather";
import {LinkGroupItem} from "../../components/link-group-item";
import {WithHeader} from "../../components/layouts/with-header";

const Home: NextPage = () => {
    return <WithHeader>
        <PageTitle>Administrativo</PageTitle>
        <div className="grid grid-cols-4 gap-4">
            <LinkGroup title="Produtos" icon={ShoppingBag}>
                <LinkGroupItem>Adicionar novo produto</LinkGroupItem>
                <LinkGroupItem>Ver todos os produtos</LinkGroupItem>
            </LinkGroup>
            <LinkGroup title="Produtores" icon={Users}>
                <LinkGroupItem>Registrar novo produtor</LinkGroupItem>
                <LinkGroupItem>Ver todos os produtores</LinkGroupItem>
            </LinkGroup>
            <LinkGroup title="Aberturas" icon={ShoppingCart}>
                <LinkGroupItem>Adicionar nova abertura</LinkGroupItem>
                <LinkGroupItem>Ver aberturas pendentes</LinkGroupItem>
                <LinkGroupItem>Ver todas as aberturas</LinkGroupItem>
            </LinkGroup>
            <LinkGroup title="Usuários" icon={User}>
                <LinkGroupItem>Ver todos os usuários</LinkGroupItem>
            </LinkGroup>
        </div>
    </WithHeader>
}
export default Home;
