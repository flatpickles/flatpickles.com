/**
 * Return a Date object from a simple date string, assuming Pacific time.
 * This is a naive solution; using a better datetime library (like js-joda)
 * would be more resilient. Mostly I just need to make sure that the same
 * date (including timezone) is used for both CSR & SSR.
 * 
 * @param dateString - a simple date string, e.g. 01/19/23
 * @returns - a Date object
 */
export function datePST(dateString: string) {
    // todo: this doesn't work in Safari, with dates like '2022-10-29'
    return new Date(dateString + ' 12:00:00 GMT-0800');
}
