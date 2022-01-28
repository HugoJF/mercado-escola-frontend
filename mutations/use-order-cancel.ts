import {useMutation, useQueryClient} from "react-query";
import {api} from "../api";
import {OrderType} from "@models/orders";

export function useOrderCancel() {
    const queryClient = useQueryClient();

    return useMutation(
        (order: OrderType) => api.orders.cancel(order),
        {
            onSuccess: () => {
                queryClient.invalidateQueries()
            }
        }
    )
}
