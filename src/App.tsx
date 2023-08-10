import BgImage from './images/texture.jpg';

import NameAndLinks from './components/NameAndLinks';
import AboutMe from './components/AboutMe';
import SkillsAndProjects from './components/SkillsAndProjects';
import InfoPopover from './components/InfoPopover';

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${BgImage})` }}
      className='bg bg-repeat h-auto w-auto flex flex-col justify-around md:flex-row dark'>
      <div className="bg bg-repeat h-screen w-screen md:w-1/3 p-5 flex flex-col items-center justify-center dark:text-light-silver">
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
    </div >
  )
}

export default App
