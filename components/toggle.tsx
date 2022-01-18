import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {NextPage} from "next";

type NativeProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type ExtraProps = {}

export const Toggle: NextPage<NativeProps & ExtraProps> = ({id, name, placeholder, children, ...rest}) => {
    return <div
        className="border-t border-b border-r border-gray-300 first:rounded-l first:border-l last:rounded-r last:border-r overflow-hidden"
    >
        <input
            id={id}
            name={name}
            className="appearance-none pointer-events-none peer sr-only"
            type="radio"
            {...rest}
        />
        <label
            htmlFor={id}
            className="select-none duration-150 flex items-center justify-center p-6 bg-white hover:bg-gray-100 peer-checked:bg-blue-600 peer-checked:text-white cursor-pointer"
        >
            {children}
        </label>
    </div>;
};
