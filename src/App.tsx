import BgImage from './images/texture.jpg';

import NameAndLinks from './components/NameAndLinks';
import AboutMe from './components/AboutMe';
import SkillsAndProjects from './components/SkillsAndProjects';

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${BgImage})` }}
      className='bg bg-repeat h-auto w-auto flex flex-col justify-around md:flex-row'>
      <div className="bg bg-repeat h-screen w-screen md:w-1/3 p-5 flex flex-col items-center justify-center text-light-silver">
        <NameAndLinks />
        <span className="hidden md:block">
          <AboutMe />
        </span>
      </div>
      <div className="bg bg-repeat h-screen w-screen md:w-1/3 p-5 flex items-center justify-center text-light-silver">
        <div className="text-light-silver flex flex-col gap-5">
          <span className="md:hidden">
            <AboutMe />
          </span>
          <SkillsAndProjects />
        </div>
      </div>
    </div >
  )
}

export default App
