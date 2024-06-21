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
        geCurrentEvent(): CalendarEvent | null {
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
        updateEvent(CalendarEvent: CalendarEvent) {
            const newEvent = JSON.parse(JSON.stringify(CalendarEvent))
            const index = this.events.findIndex((event) => event.id === newEvent.id)
            this.events[index] = newEvent
        },
        deleteEvent(calendarEvent: CalendarEvent) {
            this.events = this.events.filter((event) => event.id !== calendarEvent.id)
        }
    }
})
