import {NextPage} from "next";
import Link from 'next/link';
import {forwardRef, useState} from "react";
import {Heart, Home, Icon, Menu, Search, Settings, ShoppingCart, User, X} from "react-feather";
import clsx from "clsx";
import {useAuth} from "@helpers/selectors";

type IconContainerProps = {
    display: 'mobile' | 'desktop';
    onClick?: () => void;
}
const IconContainer: NextPage<IconContainerProps> = forwardRef<HTMLDivElement, IconContainerProps>(
    ({display, children, onClick}, ref) => (
        <div
            ref={ref}
            onClick={onClick}
            className={clsx('duration-150 flex items-center px-6 hover:bg-gray-50 cursor-pointer', {
                'hidden md:flex': display === 'desktop',
                'flex md:hidden': display === 'mobile',
            })}
        >
            {children}
        </div>
    ));

IconContainer.displayName = 'IconContainer';

const desktopMenu: { icon: Icon, href: string, display: 'mobile' | 'desktop' }[] = [{
    icon: Heart,
    href: '/',
    display: 'desktop',
}, {
    icon: ShoppingCart,
    href: '/cart',
    display: 'desktop',
}, {
    icon: Settings,
    href: '/admin',
    display: 'desktop',
}];

const mobileMenu: { icon: Icon, label: string, href: string }[] = [{
    icon: Home,
    href: '/',
    label: 'Início',
}, {
    icon: Heart,
    href: '/favorites',
    label: 'Favoritos',
}, {
    icon: ShoppingCart,
    href: '/cart',
    label: 'Pedidos',
}, {
    icon: Settings,
    href: '/admin',
    label: 'Administrativo',
}, {
    icon: User,
    href: '/profile',
    label: 'Minha conta',
}];

export const Header: NextPage = () => {
    const auth = useAuth();

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return <header
        className="sticky top-0 inset-x-0 bg-white z-10"
    >
        <div className="flex justify-between md:justify-between h-20 items-stretch border-b border-gray-300">
            <IconContainer display="mobile" onClick={toggleMenu}>
                {!menuOpen && <Menu/>}
                {menuOpen && <X/>}
            </IconContainer>
            <Link href="/">
                <h3 className="hidden md:flex items-center duration-150 px-6 text-xl font-bold hover:bg-gray-50 tracking-tighter cursor-pointer whitespace-nowrap">
                    Mercado Escola
                </h3>
            </Link>
            <div className="hidden md:flex items-stretch flex-grow py-3 px-6">
                <div className="flex items-stretch w-full relative">
                    <Search className="absolute ml-4 left-0 top-1/2 -translate-y-1/2 pointer-events-none"/>
                    <input className="pl-12 w-full border rounded" type="text" autoComplete="off"/>
                </div>
            </div>
            <div className="flex items-stretch">
                {desktopMenu.map(({icon: Icon, href, display}) => (
                    <Link href={href} key={href}>
                        <IconContainer display={display}>
                            <Icon/>
                        </IconContainer>
                    </Link>
                ))}

                <Link href="/account">
                    <div className="duration-150 flex items-center space-x-3 px-6 hover:bg-gray-50 cursor-pointer">
                        <User/>
                        <span className="hidden md:inline whitespace-nowrap">
                            {auth.me?.name}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
        {menuOpen && <div
            className="py-2 w-full border-b border-gray-300 shadow-lg"
            onClick={toggleMenu}
        >
            {mobileMenu.map(({label, href, icon: Icon}) => <Link key={href} href={href}>
                <div className="flex items-center px-5 py-4 hover:bg-gray-50 cursor-pointer">
                    <Icon className="text-gray-500"/>
                    <span className="ml-4">{label}</span>
                </div>
            </Link>)}
        </div>}
    </header>;
};
