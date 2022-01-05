import {useState} from "react";
import {NextPage} from "next";
import {Heart, Home, Icon, Menu, Search, Settings, ShoppingCart, User, X} from "react-feather";
import clsx from "clsx";

type IconContainerProps = {
    display: 'mobile' | 'desktop';
}
const IconContainer: NextPage<IconContainerProps> = ({display, children}) => (
    <div
        className={clsx('duration-150 flex items-center px-6 hover:bg-gray-100 cursor-pointer', {
            'hidden md:flex': display === 'desktop',
            'flex md:hidden': display === 'mobile',
        })}
    >
        {children}
    </div>
);

const desktopMenu: { icon: Icon, href: string, display: 'mobile' | 'desktop' }[] = [{
    icon: Heart,
    href: '/', // TODO,
    display: 'desktop',
}, {
    icon: ShoppingCart,
    href: '/about', // TODO
    display: 'desktop',
}, {
    icon: Settings,
    href: '/contact', // TODO
    display: 'desktop',
}, {
    icon: Search,
    href: '/contact', // TODO
    display: 'mobile',
}];

const mobileMenu: { icon: Icon, label: string, href: string }[] = [{
    icon: Home,
    href: '/', // TODO,
    label: 'Início',
}, {
    icon: Heart,
    href: '/', // TODO,
    label: 'Favoritos',
}, {
    icon: ShoppingCart,
    href: '/about', // TODO
    label: 'Pedidos',
}, {
    icon: Settings,
    href: '/contact', // TODO
    label: 'Administrativo',
}, {
    icon: User,
    href: '/contact', // TODO
    label: 'Minha conta',
}];

export const Header: NextPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return <header
        className="fixed top-0 inset-x-0 bg-white z-10"
    >
        <div className="flex justify-between md:justify-between h-20 items-stretch border-b border-gray-300">
            <IconContainer display="mobile">
                {!menuOpen && <Menu className="flex-shrink-0" onClick={toggleMenu}/>}
                {menuOpen && <X className="flex-shrink-0" onClick={toggleMenu}/>}
            </IconContainer>
            <h3 className="hidden md:flex items-center duration-150 px-6 text-xl font-bold hover:bg-gray-100 tracking-tighter cursor-pointer whitespace-nowrap">
                Mercado Escola
            </h3>
            <div className="hidden md:flex items-stretch flex-grow py-3 px-6">
                <div className="flex items-stretch w-full relative">
                    <Search className="absolute ml-4 left-0 top-1/2 -translate-y-1/2 pointer-events-none"/>
                    <input className="pl-12 w-full border rounded" type="text" autoComplete="off"/>
                </div>
            </div>
            <div className="flex items-stretch">
                {/* TODO missing href */}
                {desktopMenu.map(({icon: Icon, href, display}) => (
                    <IconContainer display={display}>
                        <Icon className="flex-shrink-0"/>
                    </IconContainer>
                ))}

                <div className="duration-150 flex items-center space-x-3 px-6 hover:bg-gray-100 cursor-pointer">
                    <User className="flex-shrink-0"/>
                    {/* TODO nome do usuario */}
                    <span className="hidden md:inline whitespace-nowrap">
                        Rafael Fulano
                    </span>
                </div>
            </div>
        </div>
        {menuOpen && <div
            className="py-2 w-full border-b border-gray-300 shadow-lg"
            onClick={toggleMenu}
        >
            {mobileMenu.map(({label, icon: Icon}) => <div
                className="flex items-center px-5 py-4 hover:bg-gray-100 cursor-pointer"
            >
                <Icon className="flex-shrink-0 text-gray-500"/>
                <span className="ml-4">{label}</span>
            </div>)}
        </div>}
        {/* TODO toggle this bar */}
        <div className="flex px-6 py-3 bg-red-500 text-white cursor-pointer">
            <ShoppingCart/>
            {/* TODO link */}
            <a className="flex-grow text-center" href="#">Ver carrinho</a>
            {/* TODO price */}
            <span>R$ 3,00</span>
        </div>
    </header>;
};
