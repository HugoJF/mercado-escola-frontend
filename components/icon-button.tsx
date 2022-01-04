import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {Icon} from "react-feather";
import {NextPage} from "next";
import clsx from "clsx";

type ButtonColor = 'default' | 'primary' | 'danger';

type NativeProps = DetailedHTMLProps<InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ExtraProps = {
    color?: ButtonColor;
    icon: Icon;
}

const classMap: { [key in ButtonColor]: string } = {
    default: 'bg-white hover:bg-gray-100 border border-gray-300',
    primary: 'text-white bg-green-600 hover:bg-green-700',
    danger: 'text-white bg-red-600 hover:bg-red-700',
}

export const IconButton: NextPage<NativeProps & ExtraProps> = ({icon: Icon, color = 'default'}) => {
    return <button className={clsx('duration-150 p-6 rounded', classMap[color])}>
        <Icon/>
    </button>;
};
