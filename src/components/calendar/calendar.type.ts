export type CalendarEvent = {
    id: string,
    allDay: boolean,
    weekDay: string ,
    start: Date,
    end: Date
    title: string,
    description: string,
    backgroundColor: string,
}