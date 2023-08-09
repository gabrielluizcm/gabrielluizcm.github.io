import BgImage from './images/texture.jpg';

import NameAndLinks from './components/NameAndLinks';

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${BgImage})` }}
      className="bg bg-repeat h-screen w-screen p-5 flex items-center justify-center text-light-silver">
      <NameAndLinks />
    </div>
  )
}

export default App
