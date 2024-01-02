
<template>
  <div class="app">
    <div class="desktopContainer">
      {{ appStore.currentPage }}
      <div v-for="component in appStore.getPageData.desktop">
        <component :is="component"></component>
      </div>
      <button @click="appStore.setCurrentPage(pagesEnum.calendar)">change</button>
    </div>
    <div class="mobileContainer">
    </div>
  </div>
</template>

<script setup lang="ts">
import { pagesEnum } from './pages'
import { useAppStore } from './stores/appState'

const appStore = useAppStore()

</script>

<style scoped lang="scss">
.app {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: green;

  .main-container {
    width: 100%;
    max-width: 90vw;
    height: 20vh;
    background-color: red;
  }

  .side-container {}
}
</style>
