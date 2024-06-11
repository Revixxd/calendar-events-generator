import { defineStore } from 'pinia'
import { Event } from '../../components/calendar/calendar.type'

export const useCalendarStore = defineStore('calendarState', {
    state: () => ({
        events: [] as Event[],
        currentEvent: null as Event | null
    }),
    getters: {
        getEvents() {
            return this.events
        },
        geCurrentEvent() {
            return this.currentEvent
        }
    },
    actions: {
        setCurrentEvent(event: Event) {
            this.currentEvent = event
        },
        setEvents(passedEvents: Event[]) {
            this.events = passedEvents
        },
        appendEvent(event: Event) {
            this.events.push(event)
        }
    }
})
