import { DefineComponent } from 'vue'
import HelloWorld from '../components/HelloWord.vue'
import CalendarComponent from '../components/CalendarComponent.vue'
import CalendarInterface from '../components/CalendarInterface.vue'

// to do remove defineComponent error
export const desktopComponents: Record<string, DefineComponent> = {
    'home': HelloWorld as DefineComponent,
    'calendar': CalendarComponent as DefineComponent,
    'calendarInterface': CalendarInterface as DefineComponent,
}

export const mobileComponents: Record<string, DefineComponent> = {
    'homeMobile': HelloWorld as DefineComponent,
    'calendarMobile': HelloWorld as DefineComponent,
}