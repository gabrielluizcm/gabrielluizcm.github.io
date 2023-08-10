import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import i18nRoot from './i18n';

import BgTexture from './images/texture.webp';

import NameAndLinks from './components/NameAndLinks';
import AboutMe from './components/AboutMe';
import SkillsAndProjects from './components/SkillsAndProjects';
import InfoPopover from './components/InfoPopover';
import DarkModeSwitch from './components/DarkModeSwitch';
import LanguageSwitch from './components/LanguageSwitch';

function App() {
  const { i18n } = useTranslation();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const preferredMode = localStorage.getItem('darkMode');
    if (preferredMode)
      setIsDark(preferredMode === 'true');

    const preferredLang = localStorage.getItem('lang');
    if (preferredLang)
      i18nRoot.changeLanguage(preferredLang);
  }, []);

  function handleDarkModeSwitchClick() {
    const newIsDark = !isDark;
    localStorage.setItem('darkMode', `${newIsDark}`);
    setIsDark(newIsDark);
  }

  function handleLanguageSwitchClick() {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18nRoot.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <div
        style={{ backgroundImage: `url(${BgTexture})` }}
        className={`bg bg-repeat bg-pale-beige dark:bg-pine-tree h-auto w-auto flex flex-col justify-around md:flex-row transition-all`}>
        <div className="bg bg-repeat h-screen w-screen md:w-1/3 p-5 flex flex-col items-center justify-center text-faux-black dark:text-light-silver">
          <NameAndLinks />
          <span className="hidden md:block">
            <AboutMe />
          </span>
        </div>
        <div className="bg bg-repeat h-full md:h-screen w-screen md:w-1/3 p-5 flex items-center justify-center dark:text-light-silver">
          <div className="dark:text-light-silver flex flex-col gap-5">
            <span className="md:hidden">
              <AboutMe />
            </span>
            <SkillsAndProjects />
          </div>
        </div>
        <div className="absolute top-2 right-2 flex gap-3 items-center">
          <InfoPopover />
          <DarkModeSwitch isDark={isDark} onClick={handleDarkModeSwitchClick} />
          <LanguageSwitch lang={i18n.language} onClick={handleLanguageSwitchClick} />
        </div>

      </div >
    </div>
  )
}

export default App
