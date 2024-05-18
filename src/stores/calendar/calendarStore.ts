import { defineStore } from 'pinia'
import { Event } from '../../components/calendar/calendar.type'

export const useCalendarStore = defineStore('calendarState', {
    state: () => ({
        events: [] as Event[],
    }),
    getters: {
        getEvents() {
            return this.events
        },
        // getEvent(id: string) {
        //     return this.events.find((event: any) => event.id === id)
        // }
    },
    actions: {
        setEvents(events: Event[]) {
            this.events = events
        },
        appendEvent(event: Event) {
            this.events.push(event)
        }
    }
})
