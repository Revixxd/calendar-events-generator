
<template>
  <div class="app">
    <div v-if="appStore.isMobile === false" class="desktop-container" :class="appStore.layout">
      <DesktopComponentContainer v-for="component in appStore.getPageData.desktop">
        <component :is="component"></component>
      </DesktopComponentContainer>
    </div>
    <div v-else class="mobileContainer" :class="appStore.layout">
      <div v-for="component in appStore.getPageData.mobile">
        <component :is="component"></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useAppStore } from './stores/app/appState'
import { useCalendarStore } from './stores/calendar/calendarStore'
import { useMediaQuery } from '@vueuse/core'
import DesktopComponentContainer from './components/containers/desktopcomponentcontainer.vue'

const isMobile = useMediaQuery('(max-width: 800px)')

const appStore = useAppStore()
const calendarStore = useCalendarStore()

watch(isMobile, (isMobile) => {
  appStore.setIsMobile(isMobile)
})

</script>

<style scoped lang="scss">
.app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F1FAEE;

  .desktop-container {
    width: 90vw;
    height: 80vh;
    max-width: 2500px;
    display: flex;
    gap: 20px;
    flex-direction: row;
  }
}

.fiftyFifty {
  display: flex;

  div:nth-child(1) {
    flex: 50;
  }

  div:nth-child(2) {
    flex: 50;
  }
}

.seventyThird {
  display: flex;

  div:nth-child(1) {
    flex: 70;
  }

  div:nth-child(2) {
    flex: 30;
  }
}
</style>./stores/app/appState
