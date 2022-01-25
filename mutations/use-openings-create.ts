import {useMutation, useQueryClient} from "react-query";
import {OpeningProperties} from "../types/openings";
import {api} from "../api";

export function useOpeningsCreate() {
    const queryClient = useQueryClient();

    return useMutation(
        (data: OpeningProperties) => api.openings.store(data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries()
            }
        }
    )
}
