import {EffectCallback, useEffect} from "react";

export const useTrigger = (effect: EffectCallback, dep: any, triggers?: any[]) => {
    useEffect(() => {
        if (!triggers) {
            effect();
        }

        if (triggers?.includes(dep)) {
            effect();
        }
    }, [dep])
}
