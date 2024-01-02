import { defineStore } from 'pinia'
import { pageType, pagesEnum } from '../pages'
import { pages } from '../pages'

export const useAppStore = defineStore('appState', {
  state: () => ({
    currentPage: 'home' as pagesEnum,
  }),
  getters: {
    getCurrentPage() {
      return this.currentPage as pagesEnum
    },
    getPageData() {
      return getPageObj(this?.currentPage) as pageType
    },
  },
  actions: {
    setCurrentPage(page: pagesEnum) {
      this.currentPage = page
    },
  }
})

function getPageObj(param: pagesEnum): pageType {
  return pages.find((page) => page.name === param) ?? pages[0]
}
