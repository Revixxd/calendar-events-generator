<template>
    <div>
        <pre>
            {{ currentEvent }}
        </pre>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCalendarStore } from '../stores/calendar/calendarStore'

const calendarStore = useCalendarStore()

const currentEvent = ref(calendarStore.geCurrentEvent)
</script>

<style scoped></style>