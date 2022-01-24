import {Dispatch} from "../stores/store";
import {useDispatch} from "react-redux";

export const useDispatcher = () => {
    return useDispatch<Dispatch>();
}
