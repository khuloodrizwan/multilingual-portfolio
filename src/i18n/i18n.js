import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './en.json'
import hi from './hi.json'
import mr from './mr.json'
import de from './de.json'
import fr from './fr.json'
import zh from './zh.json'

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  mr: { translation: mr },
  de: { translation: de },
  fr: { translation: fr },
  zh: { translation: zh }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false // React already escapes
    }
  })

export default i18n