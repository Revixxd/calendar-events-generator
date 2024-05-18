<template>
    <div>
        <div class="">
            <p>Nazwa wydarzenia:</p>
            <input :placeholder="currentEvent.title" type="text"/>
        </div>
        <div class="">
            <p>Dzien</p>
            <input :placeholder="currentEvent.weekDay"/>
        </div>
        <div class="">
            <p>godzina start</p>
            <input type="time"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCalendarStore } from '../stores/calendar/calendarStore'

const calendarStore = useCalendarStore()

const currentEvent = computed(() => calendarStore.geCurrentEvent)

function addEvent() {
    calendarStore.appendEvent({
        "id": "2",
        "allDay": false,
        "weekDay": "Monday",
        "start": new Date("2024-05-17T08:00:06.997Z"),
        "end": new Date ("2024-05-18T10:00:06.997Z")
    })
}

</script>

<style scoped></style>