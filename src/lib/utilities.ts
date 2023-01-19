/**
 * Return a Date object from a simple date string, assuming Pacific time.
 * @param dateString - a simple date string, e.g. 01/19/23
 * @returns - a Date object
 */
export function datePST(dateString: string) {
    return new Date(dateString + ' PST');
}
