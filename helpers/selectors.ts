import {RootState} from "../stores/store";
import {useSelector} from "react-redux";

export function useToasts() {
    return useSelector((state: RootState) => state.toasts);
}

export function useAuth() {
    return useSelector((state: RootState) => state.auth);
}

export function useAddress() {
    return useSelector((state: RootState) => state.address);
}
