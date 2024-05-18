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
            console.log(event)
            this.currentEvent = event
        },
        setEvents(events: Event[]) {
            this.events = events
        },
        appendEvent(event: Event) {
            this.events.push(event)
        }
    }
})
