<template>
    <div v-if="currentEvent">
    <div>
        <div class="">
            <p>Nazwa wydarzenia:</p>
            <input v-model="editableEventInfo.title" type="text"/>
        </div>
        <div class="">
            <p>Opis:</p>
            <input v-model="editableEventInfo.description" type="text"/>
        </div>
        <div class="">
            <p>Kolor:</p>
            <input v-model="editableEventInfo.backgroundColor" type="color" />
        </div>
        <div class="">
            <p>godzina start</p>
            <input type="time"/>
        </div>
    </div>
    <button :disable="true" @click="overwriteCurrentEvent">Zapisz</button>
    <button @click="deleteEvent">Usun wydarzenia</button>
    <button @click="generateFileButton">Wygeneruj plik</button>
</div>

</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useCalendarStore } from '../stores/calendar/calendarStore'
import {mapToEventAttributes, generateICSFile} from '../utilities/ics/generateFile'
import { CalendarEvent } from './calendar/calendar.type';
import { storeToRefs } from 'pinia';

const calendarStore = useCalendarStore()
const { getEvents, geCurrentEvent } = storeToRefs(calendarStore)
const events = computed(() => getEvents.value)
const currentEvent = computed(() => geCurrentEvent.value)
const editableEventInfo = ref<CalendarEvent>()

function generateFileButton() {
    const MappedEvents = events.value.map(element => {
        return mapToEventAttributes(element)
    })
    generateICSFile(MappedEvents)
}

watch(currentEvent, () => {
    editableEventInfo.value = JSON.parse(JSON.stringify(currentEvent.value))
})

watch(events, () => {
    editableEventInfo.value = JSON.parse(JSON.stringify(currentEvent.value))
})

function overwriteCurrentEvent() {
    if(editableEventInfo.value) {
        calendarStore.updateEvent(editableEventInfo.value)
    }
}

function deleteEvent() {
    if(currentEvent.value) {
        calendarStore.deleteEvent(currentEvent.value)
    }
}

</script>

<style scoped></style>