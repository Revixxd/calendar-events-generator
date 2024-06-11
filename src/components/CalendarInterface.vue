<template>
    <div v-if="currentEvent">
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
        <pre>
            {{currentEvent}}
        </pre>
    </div>
    <button @click="generateFileButton">Wygeneruj plik</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCalendarStore } from '../stores/calendar/calendarStore'
import {mapToEventAttributes, generateICSFile} from '../utilities/ics/generateFile'

const calendarStore = useCalendarStore()

const currentEvent = computed(() => calendarStore.geCurrentEvent)
const events = computed(() => calendarStore.getEvents)

function generateFileButton() {
    const MappedEvents = events.value.map(element => {
        return mapToEventAttributes(element)
    })
    generateICSFile(MappedEvents)
}

</script>

<style scoped></style>