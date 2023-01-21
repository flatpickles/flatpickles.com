import { Locale } from '@js-joda/locale_en-us'
import { LocalDate, ZoneId, DateTimeFormatter, ZonedDateTime, LocalTime } from '@js-joda/core';

export default class DateUtils {
    static pacificDate(simpleDateString: string): ZonedDateTime {
        const parsedDate = this.parse(simpleDateString);
        if (!parsedDate) throw new Error('Couldn\'t parse date');

        return ZonedDateTime.of(
            parsedDate!,
            LocalTime.NOON,
            ZoneId.of("-0800")
        );
    }

    static renderLong(zonedDT: ZonedDateTime): string {
        const pattern = 'MMMM d, yyyy';
        const renderFormatter = DateTimeFormatter.ofPattern(pattern).withLocale(Locale.ENGLISH);
        return zonedDT.format(renderFormatter)
    }

    static renderShort(zonedDT: ZonedDateTime): string {
        const pattern = 'MMM d, yyyy';
        const renderFormatter = DateTimeFormatter.ofPattern(pattern).withLocale(Locale.ENGLISH);
        return zonedDT.format(renderFormatter)
    }

    static parse(simpleDateString: string): LocalDate | null {
        try {
            const formatterA = DateTimeFormatter.ofPattern('M/d/yy');
            return LocalDate.parse(simpleDateString, formatterA);
        } catch {
            try {
                const formatterB = DateTimeFormatter.ofPattern('M/d/yyyy');
                return LocalDate.parse(simpleDateString, formatterB);
            } catch {
                try {
                    const formatterC = DateTimeFormatter.ofPattern('yyyy-M-d');
                    return LocalDate.parse(simpleDateString, formatterC);
                } catch {
                    return null;
                }
            }
        }
    }
}

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

    var parsedDate;
    // try {
    //     parsedDate = LocalDate.parse(dateStringA, formatter);
    // }


    // todo: this doesn't work in Safari, with dates like '2022-10-29'
    return new Date(dateString + ' 12:00:00 (PST)');
}
