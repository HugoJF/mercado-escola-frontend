import {NextPage} from "next";
import Link from "next/link";
import {AlertCircle, Book, Flag, Heart, LogOut, Mail, MapPin, Phone, ShoppingCart, User} from "react-feather";
import {UserLayout} from "@components/layouts/user-layout";
import {PageTitle} from "@components/text/page-title";
import {ListItemGroup} from "@components/list-item-group";
import {ListItem} from "@components/list-item";
import {useAuth} from "@helpers/selectors";

const AccountIndex: NextPage = () => {
    const auth = useAuth();

    return <UserLayout>
        <PageTitle>Minha conta</PageTitle>
        <ListItemGroup>
            <ListItem leftIcon={User} title="Nome" description={auth?.me?.name} rightIcon={null}/>
            <ListItem leftIcon={Mail} title="Email" description={auth?.me?.email} rightIcon={null}/>
            <Link passHref href="/account/update-phone">
                <ListItem leftIcon={Phone} title="Telefone" description={auth?.me?.phone ?? undefined}/>
            </Link>
            <Link passHref href="/account/addresses">
                <ListItem leftIcon={MapPin} title="Endereços"/>
            </Link>
        </ListItemGroup>

        <PageTitle>Mais</PageTitle>
        <ListItemGroup>
            <ListItem leftIcon={AlertCircle} title="Avisos"/>
            <Link href="/cart">
                <ListItem leftIcon={ShoppingCart} title="Carrinho"/>
            </Link>
            <Link href="/orders">
                <ListItem leftIcon={Book} title="Pedidos"/>
            </Link>
            <ListItem leftIcon={Heart} title="Favoritos"/>
            <ListItem leftIcon={Flag} title="Ajuda"/>
            <Link href="/logout">
                <ListItem leftIcon={LogOut} title="Sair"/>
            </Link>
        </ListItemGroup>
    </UserLayout>
}
export default AccountIndex
