import { Locale } from '@js-joda/locale_en-us';
import { LocalDate, ZoneId, DateTimeFormatter, ZonedDateTime, LocalTime } from '@js-joda/core';

export class DateUtils {
    static pacificDate(simpleDateString: string): ZonedDateTime {
        const parsedDate = this.parse(simpleDateString);
        if (!parsedDate) throw new Error("Couldn't parse date");

        return ZonedDateTime.of(parsedDate!, LocalTime.NOON, ZoneId.of('-0800'));
    }

    static renderLong(zonedDT: ZonedDateTime): string {
        const pattern = 'MMMM d, yyyy';
        const renderFormatter = DateTimeFormatter.ofPattern(pattern).withLocale(Locale.ENGLISH);
        return zonedDT.format(renderFormatter);
    }

    static renderShort(zonedDT: ZonedDateTime): string {
        const pattern = 'MMM. yyyy';
        const renderFormatter = DateTimeFormatter.ofPattern(pattern).withLocale(Locale.ENGLISH);
        return zonedDT.format(renderFormatter);
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
