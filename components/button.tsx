import {NextPage} from "next";
import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import clsx from "clsx";

type ButtonColor = 'default' | 'primary' | 'danger';

type NativeProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type ExtraProps = {
    color?: ButtonColor,
}

const classMap: { [key in ButtonColor]: string } = {
    default: 'bg-white hover:bg-gray-100 border border-gray-300',
    primary: 'text-white bg-green-600 hover:bg-green-700',
    danger: 'text-white bg-red-600 hover:bg-red-700',
}

export const Button: NextPage<NativeProps & ExtraProps> = ({color = 'default', children}) => {
    return <button className={clsx('duration-150 px-16 py-6 rounded', classMap[color])}>
        {children}
    </button>;
};
