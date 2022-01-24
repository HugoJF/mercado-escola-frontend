import {NextPage} from "next";
import {WithHeader} from "../../components/layouts/with-header";
import {PageTitle} from "../../components/text/page-title";
import {ListItemGroup} from "../../components/list-item-group";
import {ListItem} from "../../components/list-item";
import {AlertCircle, Book, Flag, Heart, LogOut, Mail, MapPin, Phone, ShoppingCart, User} from "react-feather";
import Link from "next/link";
import {useAuth} from "../../helpers/selectors";
import {Authed} from "../../components/gates/authed";

const AccountIndex: NextPage = () => {
    const auth = useAuth();

    return <Authed><WithHeader>
        <PageTitle>Minha conta</PageTitle>
        <ListItemGroup>
            <ListItem leftIcon={User} title="Nome" description={auth?.me?.name} rightIcon={null}/>
            <ListItem leftIcon={Mail} title="Email" description={auth?.me?.email} rightIcon={null}/>
            <Link passHref href="/account/update-phone">
                <ListItem leftIcon={Phone} title="Telefone" description={auth?.me?.phone ?? undefined}/>
            </Link>
            <ListItem leftIcon={MapPin} title="Endereços"/>
        </ListItemGroup>

        <PageTitle>Mais</PageTitle>
        <ListItemGroup>
            <ListItem leftIcon={AlertCircle} title="Avisos"/>
            <ListItem leftIcon={ShoppingCart} title="Carrinho"/>
            <ListItem leftIcon={Book} title="Pedidos"/>
            <ListItem leftIcon={Heart} title="Favoritos"/>
            <ListItem leftIcon={Flag} title="Ajuda"/>
            <ListItem leftIcon={LogOut} title="Sair"/>
        </ListItemGroup>
    </WithHeader></Authed>
}
export default AccountIndex
