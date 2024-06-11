<template>
    <div class="calendar-component-container">
        <fullcalendar :options="calendarOptions" />
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import fullcalendar from '@fullcalendar/vue3'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { CalendarOptions } from '@fullcalendar/core'
import { EventApi } from '@fullcalendar/core/index.js'
import { Event } from './calendar.type'
import { useCalendarStore } from '../../stores/calendar/calendarStore'
import { mapEventsWithTimeTableDays } from './calendarHelpers'

const calendarStore = useCalendarStore()
const events = computed(() => calendarStore.getEvents)
const calendarEvents = ref<Event[]>(mapEventsWithTimeTableDays(events.value))

const calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek',
    headerToolbar: {
        left: '',
        center: '',
        right: ''
    },
    firstDay: 1,
    allDaySlot: false,
    weekNumbers: false,
    selectMirror: true,
    selectable: true,
    editable: true,
    eventOverlap: false,
    select: (info) => {
        const newEvent = {
            id: Date.now().toString(),
            start: info.start,
            end: info.end,
            allDay: info.allDay,
            weekDay: info.start.toLocaleDateString('en-US', {weekday: 'long'})
        }
        addEvent(newEvent)
    },
    eventResize: (info) => {
        updateEvent(info.event)
    },
    eventDrop(info) {
        updateEvent(info.event)
    },
    eventClick: (info) => {
        calendarStore.setCurrentEvent(calendarEvents.value.find((e) => e.id === info.event.id) as Event)
    },
    views: {
        timeGridWeek: {
            slotDuration: '00:30:00',
            slotMinTime: '08:00:00',
            slotMaxTime: '20:00:00',
            scrollTime: '08:00:00',
            dayHeaderFormat: {
                weekday: 'long',
                month: undefined,
                day: undefined,
                omitCommas: true
            },
            slotLabelInterval: '01:00:00',
            slotLabelFormat: {
                hour: 'numeric',
                minute: '2-digit',
                omitZeroMinute: false,
                meridiem: 'short'
            }
        }
    },
    events: calendarEvents.value
    
}

// watch(events, (events) => {
//     calendarEvents.value = mapEventsWithTimeTableDays(events)
// })

onMounted(() => {
    if(calendarEvents.value.length > 0) {
        calendarStore.setCurrentEvent(calendarEvents.value[0])
    }
    
})

function addEvent(event: Event) {
    calendarEvents.value.push(event)
    calendarStore.setEvents(calendarEvents.value)
}

function updateEvent(event: EventApi) {
    const updatedEvent = calendarEvents.value.find((e) => e.id === event.id)
    if (updatedEvent) {
        updatedEvent.start = event.start as Date
        updatedEvent.end = event.end  as Date
        updatedEvent.allDay = event.allDay
    } else {
        console.log('event not found')
    }
}

</script>

<style scoped lang="scss">
.calendar-component-container {

    &:deep(.fc) {
        .fc-header-toolbar {
            display: none;
        }

        .fc-day-today {
            background-color: transparent;
        }
    }

}
</style>