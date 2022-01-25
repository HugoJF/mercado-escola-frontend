import {useMutation, useQueryClient} from "react-query";
import {AddressProperties} from "../types/addresses";
import {api} from "../api";

export function useAddressCreate() {
    const queryClient = useQueryClient();

    return useMutation(
        (data: AddressProperties) => api.addresses.store(data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries()
            }
        }
    )
}
