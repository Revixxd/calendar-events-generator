enum WeekDaysEnum {
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
}

export type Event = {
    id: string,
    allDay: boolean,
    weekDay: string ,
    start: Date,
    end: Date,
}