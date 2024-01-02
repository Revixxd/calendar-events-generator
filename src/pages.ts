import { desktopComponents, mobileComponents } from './stores/appStoreType';
import { DefineComponent } from 'vue';

export enum pagesEnum {
    home = 'home',
    calendar = 'calendar',
}

export type pageType = {
    name: string;
    desktop: DefineComponent[];
    mobile: DefineComponent[];
}

export const pages: pageType[] = [
    {
        name: 'home',
        desktop: [
            desktopComponents.home,
            desktopComponents.home2,
        ],
        mobile: [
            mobileComponents.homeMobile,
            mobileComponents.homeMobile2,
        ],
    },
    {
        name: 'calendar',
        desktop: [
            desktopComponents.calendar,
        ],
        mobile: [
            mobileComponents.calendar,
        ],
    },
]