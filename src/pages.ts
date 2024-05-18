import { desktopComponents, mobileComponents } from './stores/app/appStoreType';
import { DefineComponent } from 'vue';

export enum pagesEnum {
    home = 'home',
    calendar = 'calendar',
}

export enum layoutEnum {
    full = 'full',
    fiftyFifty = 'fiftyFifty',
    seventyThird = 'seventyThird',
}

export type pageType = {
    name: string;
    layout: layoutEnum;
    desktop: DefineComponent[];
    mobile: DefineComponent[];
}

export const pages: pageType[] = [
    {
        name: 'home',
        layout: layoutEnum.full,
        desktop: [
            desktopComponents.home,
        ],
        mobile: [
            mobileComponents.homeMobile,
        ],
    },
    {
        name: 'calendar',
        layout: layoutEnum.seventyThird,
        desktop: [
            desktopComponents.calendar,
            desktopComponents.calendarInterface,
        ],
        mobile: [
            mobileComponents.calendarMobile,
        ],
    },
]