import { useState, useEffect } from 'react';

import BgTexture from './images/texture.png';

import NameAndLinks from './components/NameAndLinks';
import AboutMe from './components/AboutMe';
import SkillsAndProjects from './components/SkillsAndProjects';
import InfoPopover from './components/InfoPopover';
import DarkModeSwitch from './components/DarkModeSwitch';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const preferredMode = localStorage.getItem('darkMode');
    if (preferredMode)
      setIsDark(preferredMode === 'true');
  }, []);

  function handleDarkModeSwitchClick() {
    const newIsDark = !isDark;
    localStorage.setItem('darkMode', `${newIsDark}`);
    setIsDark(newIsDark);
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
        <div className="bg bg-repeat h-screen w-screen md:w-1/3 p-5 flex items-center justify-center dark:text-light-silver">
          <div className="dark:text-light-silver flex flex-col gap-5">
            <span className="md:hidden">
              <AboutMe />
            </span>
            <SkillsAndProjects />
          </div>
        </div>
        <InfoPopover />
        <DarkModeSwitch isDark={isDark} onClick={handleDarkModeSwitchClick} />
      </div >
    </div>
  )
}

export default App
