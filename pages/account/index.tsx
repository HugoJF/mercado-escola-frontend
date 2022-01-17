import {NextPage} from "next";
import {WithHeader} from "../../components/layouts/with-header";
import {PageTitle} from "../../components/text/page-title";
import {ListItemGroup} from "../../components/list-item-group";
import {ListItem} from "../../components/list-item";
import {AlertCircle, Book, Flag, Heart, LogOut, Mail, MapPin, Phone, ShoppingCart, User} from "react-feather";
import Link from "next/link";

const AccountIndex: NextPage = () => {
    return <WithHeader>
        <PageTitle>Minha conta</PageTitle>
        <ListItemGroup>
            <ListItem leftIcon={User} title="Nome" description="Rafael Fulano" rightIcon={null}/>
            <ListItem leftIcon={Mail} title="Email" description="rafael@fulano.com" rightIcon={null}/>
            <Link passHref href="/account/update-phone">
                <a><ListItem leftIcon={Phone} title="Telefone" description="(67) 9 9625 2525"/></a>
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
    </WithHeader>
}
export default AccountIndex
