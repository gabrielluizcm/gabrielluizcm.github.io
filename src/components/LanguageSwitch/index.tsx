import ReactCountryFlag from 'react-country-flag'

type LanguageSwitchProps = {
  lang: string,
  onClick: () => void
}

export default function LanguageSwitch({ lang, onClick }: LanguageSwitchProps) {
  return (
    <ReactCountryFlag countryCode={lang === 'en' ? 'US' : 'BR'} svg
      aria-label={lang === 'en' ? 'USA flag' : 'Bandeira do Brasil'}
      alt={lang === 'en' ? 'USA flag' : 'Bandeira do Brasil'}
      className='text-3xl rounded-full cursor-pointer' onClick={onClick} />
  );
}
