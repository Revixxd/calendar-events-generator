import { defineStore } from 'pinia'
import { CalendarEvent } from '../../components/calendar/calendar.type'
import { mapEventsWithTimeTableDays } from '../../components/calendar/calendarHelpers'

export const useCalendarStore = defineStore('calendarState', {
    state: () => ({
        events: [] as CalendarEvent[],
        // currentEvent: null as CalendarEvent | null
        currentEventId: null
    }),
    getters: {
        getEvents(): CalendarEvent[] {
            return this.events
        },
        geCurrentEvent(): CalendarEvent | null {
            // return this.currentEvent
            return this.events.find((event) => event.id === this.currentEventId) ?? null
        },
        getMappedEvents() {
            return mapEventsWithTimeTableDays(this.events)
        }
    },
    actions: {
        setCurrentEvent(id: string) {
            this.currentEventId = id;
            // this.currentEvent = CalendarEvent
        },
        setEvents(passedEvents: CalendarEvent[]) {
            this.events = passedEvents
        },
        addEvent(calendarEvent: CalendarEvent) {
            this.events.push(calendarEvent)
        },
        updateEvent(CalendarEvent: CalendarEvent) {
            const index = this.events.findIndex((event) => event.id === CalendarEvent.id)
            this.events[index] = CalendarEvent
            console.log(this.events)
        },
        deleteEvent(calendarEvent: CalendarEvent) {
            this.events = this.events.filter((event) => event.id !== calendarEvent.id)
        }
    }
})
