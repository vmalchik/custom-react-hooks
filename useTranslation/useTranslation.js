import { useEffect, useState, useCallback } from 'react'
import { useLocalStorage } from '../storage/useStorage'
import * as translations from './translations'
// console.log('translations', translations)

function getNestedTranslation(language, keys) {
  return keys.reduce((obj, key) => {
    // console.log(obj, obj?.[key])
    return obj?.[key]
  }, translations[language])
}

function useTranslation() {
  const { value: language, setValue: setLanguage } = useLocalStorage('language', 'en')
  const { value: fallbackLanguage, setValue: setFallbackLanguage } = useLocalStorage("fallbackLanguage", "en")

  const translate = key => {
    const keys = key.split('.')

    return (
      getNestedTranslation(language, keys) ?? getNestedTranslation(fallbackLanguage, keys) ?? key
    )
  }

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate
  }

}

export default useTranslation