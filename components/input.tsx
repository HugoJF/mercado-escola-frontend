import {DetailedHTMLProps, forwardRef, InputHTMLAttributes} from "react";
import clsx from "clsx";

type NativeProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type ExtraProps = {
    error?: string;
}
type Props = NativeProps & ExtraProps;

const Input = forwardRef<HTMLInputElement, Props>(
    ({id, name, placeholder, error, className, ...props}, ref) => {
        return <div className={className}>
            <div className="group relative">
                <input
                    ref={ref}
                    id={id}
                    name={name}
                    /* Placeholder should always have a value in order to work */
                    placeholder={placeholder ?? name ?? "A placeholder"}
                    className={clsx('w-full peer p-6 pt-9 pb-3 text-sm border placeholder-transparent rounded', {
                        'border-gray-300': !error,
                        'border-red-500 bg-red-50': error,
                    })}
                    {...props}
                />

                <label
                    htmlFor={id}
                    className={clsx('duration-150 absolute flex items-center pointer-events-none',
                        '-translate-y-3 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3',
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
    }
)

Input.displayName = 'Input';

export {Input};
