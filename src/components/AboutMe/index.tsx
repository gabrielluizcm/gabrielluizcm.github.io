import { useTranslation } from "react-i18next"

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="md:mt-8">
      <h3 className="font-fira text-xl md:hidden">
        {t('aboutTitle')}
      </h3>
      <div className="p-3 font-lato flex flex-col gap-3 md:text-2xl">
        <p>
          {t('about1.start')} <b>{t('about1.bold1')}</b>, {t('about1.middle')} <b>{t('about1.bold2')}</b>.
        </p>
        <p>
          {t('about2.start')} <s>{t('about2.strikethrough')}</s> {t('about2.end')}.
        </p>
        <p>
          {t('about3')}
        </p>
      </div>
    </section>
  )
}
