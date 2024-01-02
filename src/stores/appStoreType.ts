import { DefineComponent } from 'vue'
import HomeComponent from "../components/HomeComponent.vue";
import HomeComponent2 from "../components/HomeComponent2.vue";
import CalendarComponent from "../components/CalendarComponent.vue";

// to do remove defineComponent error
export const desktopComponents: Record<string, DefineComponent> = {
    'home': HomeComponent as DefineComponent,
    'home2': HomeComponent2 as DefineComponent,
    'calendar': CalendarComponent as DefineComponent,
}

export const mobileComponents: Record<string, DefineComponent> = {
    'home': HomeComponent as DefineComponent,
    'home2': HomeComponent2 as DefineComponent,
    'calendar': CalendarComponent as DefineComponent,
}