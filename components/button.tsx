import {NextPage} from "next";
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import clsx from "clsx";

type ButtonColor = 'default' | 'primary' | 'danger';

type NativeProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ExtraProps = {
    color?: ButtonColor,
}

const classMap: { [key in ButtonColor]: string } = {
    default: 'bg-white hover:bg-gray-100 border border-gray-300',
    primary: 'text-white bg-green-600 hover:bg-green-700',
    danger: 'text-white bg-red-600 hover:bg-red-700',
}

export const Button: NextPage<NativeProps & ExtraProps> = ({color = 'default', children, ...rest}) => {
    return <button
        className={clsx('duration-150 px-12 py-4 rounded', classMap[color])}
        {...rest}
    >
        {children}
    </button>;
};
