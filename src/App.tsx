import BgImage from './images/texture.jpg';

import NameAndLinks from './components/NameAndLinks';
import AboutMe from './components/AboutMe';
import SkillsAndProjects from './components/SkillsAndProjects';

function App() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${BgImage})` }}
        className="bg bg-repeat h-screen w-screen p-5 flex items-center justify-center text-light-silver">
        <NameAndLinks />
      </div>
      <div
        style={{ backgroundImage: `url(${BgImage})` }}
        className="bg bg-repeat h-screen w-screen p-5 flex items-center justify-center text-light-silver">
        <div className="h-screen w-screen text-light-silver flex flex-col gap-5">
          <AboutMe />
          <SkillsAndProjects />
        </div>
      </div>
    </>

  )
}

export default App
