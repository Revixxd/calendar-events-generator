<template>
    <div class="calendar-component-container">
        <fullcalendar :options="calendarOptions" />
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import fullcalendar from '@fullcalendar/vue3'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import { CalendarOptions } from '@fullcalendar/core'

const events = ref<any>([])

const calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek',
    headerToolbar: {
        left: '',
        center: '',
        right: ''
    },
    allDaySlot: false,
    weekNumbers: false,
    selectMirror: true,
    selectable: true,
    select: (event) => {
        events.value.push(event)
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
    events: events.value
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