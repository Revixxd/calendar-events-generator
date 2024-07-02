import { CalendarEvent } from "./calendar.type"

const currentWeekDates = getWeekDates()

export function getWeekDates() {
    const dates: {
        name: string
        date: Date
    }[] = []
    
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const lastMonday = getLastMonday();

    for (let i = 0; i < 7; i++) {
        const date = new Date(lastMonday)
        date.setDate(date.getDate() + i)
        dates.push({
            name: days[i],
            date: date
        })
    }
    return dates
}

export function mapEventsWithTimeTableDays(events: CalendarEvent[]):CalendarEvent[]{
    return events.map((event: CalendarEvent) => {
        return {
            ...event,
            start: manipulateDate(currentWeekDates, event.start, 'start'),
            end: manipulateDate(currentWeekDates, event.end, 'end'),
        }
    })
}

function manipulateDate(currentWeekDates: { name: string; date: Date }[], date: Date, string:string):Date {    
    date = new Date(date)
    const day = currentWeekDates.find((day) => day.name === date.toLocaleDateString('en-US', {weekday: 'long'}) )

    if(day) {
        const newDate = new Date(day.date);
        newDate.setHours(date.getHours(), date.getMinutes())
        return newDate
    } else {
        console.log('day not found')
        return date
    }
}

function getLastMonday() {
    const date = new Date();
    const todayDay = date.getDay();

    return new Date(date.setDate((date.getDate() - todayDay) + 1))
}