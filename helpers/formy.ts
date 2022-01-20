import {useEffect} from "react";
import {FieldValues, useForm, UseFormProps} from "react-hook-form";

export function useFormy<T extends FieldValues = FieldValues, U extends object = object>(
    params?: UseFormProps<T, U>,
    initial?: Record<string, unknown>
) {
    const form = useForm<T, U>(params)

    useEffect(() => {
        if (!initial) return;

        for (const [key, value] of Object.entries(initial)) {
            // @ts-ignore
            form.setValue(key, value);
        }
    }, [initial]);

    function setErrors(errors: Record<string, string[]>) {
        for (const [key, messages] of Object.entries(errors)) {
            // @ts-ignore
            form.setError(key, {type: 'manual', message: messages[0]});
        }
    }

    return {form, setErrors};
}
