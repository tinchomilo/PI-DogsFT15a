import { FILTER_CREATED } from ".";

export function filterCreated( payload ) {
    return {
        type: FILTER_CREATED,
        payload
    }
}