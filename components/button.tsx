import {NextPage} from "next";
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import clsx from "clsx";
import {Loader} from "react-feather";

type ButtonColor = 'default' | 'primary' | 'danger';

type NativeProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ExtraProps = {
    color?: ButtonColor,
    loading?: boolean,
}

const classMap: { [key in ButtonColor]: string } = {
    default: 'bg-white hover:bg-gray-100 border border-gray-300',
    primary: 'text-white bg-green-600 hover:bg-green-700',
    danger: 'text-white bg-red-600 hover:bg-red-700',
}

export const Button: NextPage<NativeProps & ExtraProps> = ({
                                                               color = 'default',
                                                               loading = false,
                                                               className,
                                                               children,
                                                               ...rest
                                                           }) => {
    return <button
        className={clsx('text-center duration-150 px-12 py-4 rounded', classMap[color], className, {
            'opacity-50 cursor-not-allowed': loading,
        })}
        {...rest}
    >
        {!loading && children}
        {loading && <Loader className="inline h-6 w-6 animate-spin"/>}
    </button>;
};
