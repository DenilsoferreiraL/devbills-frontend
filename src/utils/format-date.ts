import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

export function formateDate(date: string): string {
    return dayjs(date, 'DD/MM/YYYY').format('YYYY-MM-DD')
}   