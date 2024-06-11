import { defineStore } from 'pinia'
import { CalendarEvent } from '../../components/calendar/calendar.type'

export const useCalendarStore = defineStore('calendarState', {
    state: () => ({
        events: [] as CalendarEvent[],
        currentEvent: null as CalendarEvent | null
    }),
    getters: {
        getEvents(): CalendarEvent[] {
            return this.events
        },
        geCurrentEvent(): CalendarEvent | null{
            return this.currentEvent
        }
    },
    actions: {
        setCurrentEvent(CalendarEvent: CalendarEvent) {
            this.currentEvent = CalendarEvent
        },
        setEvents(passedEvents: CalendarEvent[]) {
            this.events = passedEvents
        },
        appendEvent(CalendarEvent: CalendarEvent) {
            this.events.push(CalendarEvent)
        }
    }
})
