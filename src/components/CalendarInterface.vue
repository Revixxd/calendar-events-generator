<template>
    <div v-if="currentEvent" class="">
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
            <p>Dzien</p>
            <input :placeholder="currentEvent.weekDay"/>
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

const calendarStore = useCalendarStore()

const events = computed(() => calendarStore.getEvents)
const currentEvent = computed(() => calendarStore.geCurrentEvent)
const editableEventInfo = ref<CalendarEvent>()

watch(events.value, () => {
    editableEventInfo.value = JSON.parse(JSON.stringify(currentEvent.value))
})

function generateFileButton() {
    const MappedEvents = events.value.map(element => {
        return mapToEventAttributes(element)
    })
    generateICSFile(MappedEvents)
}

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