import type { LocalDate } from '@js-joda/core';
import DateUtils from '../src/lib/DateUtils';

describe('date parsing', () => {
    function checkDate(testDate: LocalDate, month: number, day: number, year: number) {
        expect(testDate.monthValue()).toBe(month);
        expect(testDate.dayOfMonth()).toBe(day);
        expect(testDate.year()).toBe(year);
    }

    test('parses M/d/yy', () => {
        const testDate = DateUtils.parse('4/28/18');
        checkDate(testDate!, 4, 28, 2018);
    });

    test('parses M/d/yyyy', () => {
        const testDate = DateUtils.parse('4/28/2018');
        checkDate(testDate!, 4, 28, 2018);
    });

    test('parses y-M-d', () => {
        const testDate = DateUtils.parse('2018-4-28');
        checkDate(testDate!, 4, 28, 2018);
    });

    test('does not parse garbage', () => {
        const testDate = DateUtils.parse('garbage');
        expect(testDate).toBeNull();
    })
});

describe('pacific date', () => {
    test('long from M/d/yy', () => {
        const date = DateUtils.pacificDate('9/28/18');
        const renderedDate = DateUtils.renderLong(date);
        expect(renderedDate).toBe('September 28, 2018');
    });

    test('short from yyyy-M-d', () => {
        const date = DateUtils.pacificDate('2018-9-28');
        const renderedDate = DateUtils.renderShort(date);
        expect(renderedDate).toBe('Sep 28, 2018');
    });

    test('error from garbage', () => {
        expect(() => {
            DateUtils.pacificDate('garbage');
        }).toThrowError();
    });
});
