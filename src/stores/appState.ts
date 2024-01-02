import { defineStore } from 'pinia'
import { pageType, pagesEnum } from '../pages'
import { pages } from '../pages'
import { layoutEnum } from '../pages'

export const useAppStore = defineStore('appState', {
  state: () => ({
    currentPage: 'calendar' as pagesEnum,
    isMobile: false as boolean,
    layout: layoutEnum.seventyThird as layoutEnum,
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
    setIsMobile(isMobile: boolean) {
      this.isMobile = isMobile
    },
  }
})

function getPageObj(param: pagesEnum): pageType {
  return pages.find((page) => page.name === param) ?? pages[0]
}
