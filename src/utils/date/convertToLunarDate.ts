import moment from 'moment';
import 'moment-lunar';

export function convertToLunarDate(yyyymmdd: string) {
    // 입력된 yyyymmdd 형식의 문자열을 파싱
    const date = moment(yyyymmdd, "YYYYMMDD");

    // 음력 날짜로 변환
    return date.lunar();
}

export function getLunarMonthAndDay(yyyymmdd: string) {
    const lunarDate = convertToLunarDate(yyyymmdd);

    // 월과 일을 추출
    const lunarMonth = lunarDate.month() + 1; // month()는 0부터 시작하므로 +1 해줌
    const lunarDay = lunarDate.date();

    return { month: lunarMonth, day: lunarDay };
}