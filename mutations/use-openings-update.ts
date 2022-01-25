import {useMutation, useQueryClient} from "react-query";
import {OpeningProperties} from "../types/openings";
import {api} from "../api";

type Params = {
    id: Id;
    data: OpeningProperties;
}

export function useOpeningsUpdate() {
    const queryClient = useQueryClient();

    return useMutation(
        (params: Params) => api.openings.update(params.id, params.data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries()
            }
        }
    )
}
