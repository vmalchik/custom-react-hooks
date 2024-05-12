import { useState } from 'react'
import useTranslation from './useTranslation'

export default function UseTranslationComponent() {

  const { language, setLanguage, setFallbackLanguage, t } = useTranslation()

  return (
    <>
      <div>UseTranslation Component </div>
      <div>{language}</div>
      <div>{t("hi")}</div>
      <div>{t("bye")}</div>
      <div>{t("nested.foo.bar")}</div>
      <button onClick={()=> setLanguage('sp')}>Spanish</button>
      <button onClick={()=> setLanguage('en')}>English</button>
    </>
  );
}