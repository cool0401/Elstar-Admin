import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './lang/en.json'
import zh_cn from './lang/zh-cn.json'
import es from './lang/es.json'
import ar from './lang/ar.json'
import { themeConfig } from 'configs/theme.config'

const resources = {
    en: {
        translation: en
    },
    zhCn: {
        translation: zh_cn
    },
    es: {
        translation: es
    },
    ar: {
        translation: ar
    },
}

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: themeConfig.locale,
    lng: themeConfig.locale,
    interpolation: {
        escapeValue: false 
    }
})

export const dateLocales = {
    en: () => import('dayjs/locale/en'),
    es: () => import('dayjs/locale/es'),
    zhCn: () => import('dayjs/locale/zh-cn'),
    ar: () => import('dayjs/locale/ar'),
}

export default i18n