import { FILTER_TEMPERAMENT } from ".";

export function filterByTemperament( payload ) {
    return {
        type: FILTER_TEMPERAMENT,
        payload
    }
}