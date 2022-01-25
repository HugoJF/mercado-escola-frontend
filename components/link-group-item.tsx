import {forwardRef, MouseEventHandler, PropsWithChildren} from "react";

type Props = {
    onClick?: MouseEventHandler<HTMLLIElement>;
}
export const LinkGroupItem = forwardRef<HTMLLIElement, PropsWithChildren<Props>>(
    ({onClick, children}, ref) => <li
        ref={ref}
        onClick={onClick}
        className="duration-150 px-4 py-3 hover:bg-gray-50 cursor-pointer rounded select-none"
    >
        {children}
    </li>
);
