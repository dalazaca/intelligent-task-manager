import { createI18n } from 'vue-i18n'

// Importa tus archivos de traducción JSON
import enMessages from '@/locales/en.json'
import esMessages from '@/locales/es.json'
import itMessages from '@/locales/it.json'

// Define los idiomas disponibles, sus nombres completos y la ruta a su bandera
export const availableLocales = [
  // Usa import.meta.env.BASE_URL para que Vite inyecte la base correcta
  { code: 'es', name: 'Español', flag: `${import.meta.env.BASE_URL}flags/es.svg` },
  { code: 'en', name: 'English', flag: `${import.meta.env.BASE_URL}flags/en.svg` },
  { code: 'it', name: 'Italiano', flag: `${import.meta.env.BASE_URL}flags/it.svg` },
]

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    en: enMessages,
    es: esMessages,
    it: itMessages,
  },
  legacy: false,
  globalInjection: true,
})

export default i18n
