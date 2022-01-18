import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {NextPage} from "next";
import clsx from "clsx";

type NativeProps = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
type ExtraProps = {
    error?: string;
}

export const Textarea: NextPage<NativeProps & ExtraProps> = ({id, name, placeholder, error, className, ...props}) => {
    return <div className={className}>
        <div className="group relative">
            <textarea
                id={id}
                name={name}
                {...props}
                /* Placeholder should always have a value in order to work */
                placeholder={placeholder ?? name ?? "A placeholder"}
                className={clsx('w-full peer p-6 pt-9 pb-3 text-sm border placeholder-transparent rounded', {
                    'border-gray-300': !error,
                    'border-red-500 bg-red-50': error,
                })}
            />

            <label
                htmlFor={id}
                className={clsx('duration-150 absolute top-0 pointer-events-none',
                    'translate-y-3 peer-placeholder-shown:translate-y-6 peer-focus:translate-y-3',
                    'left-0 inset-y-0 pl-6 inset-left',
                    'text-sm cursor-text', {
                        'text-gray-500': !error,
                        'text-red-500': error,
                    })}
            >
                {placeholder ?? name}
            </label>
        </div>

        {error && <span className="block text-sm text-red-500">
            {error}
        </span>}
    </div>;
};
