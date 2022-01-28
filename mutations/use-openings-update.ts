import {useMutation, useQueryClient} from "react-query";
import {OpeningProperties} from "@models/openings";
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
