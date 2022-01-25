import {useEffect, useState} from "react";
import {Google} from "../library/google";

export const useGeocode = (address: string) => {
    const [center, setCenter] = useState<[number, number] | undefined>(undefined);

    useEffect(() => {
        new (Google()).maps.Geocoder().geocode({address},
            (results, status) => {
                if (status !== 'OK' || !results?.length) {
                    return;
                }

                const result = results[0];

                setCenter([
                    result.geometry.location.lat(),
                    result.geometry.location.lng()
                ]);
            });
    }, [address])

    return center;
}
