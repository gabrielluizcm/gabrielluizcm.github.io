import BgImage from './images/texture.jpg';

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${BgImage})` }}
      className="bg bg-repeat h-screen w-screen p-5 flex items-center justify-center text-light-silver">
      <h1 className="text-2xl md:text-5xl">Hello World!</h1>
    </div>
  )
}

export default App
