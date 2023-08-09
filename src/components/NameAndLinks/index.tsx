import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import MyPicture from '../../images/picture.jpg';

export default function NameAndLinks() {
  return (
    <section className="flex flex-col items-center gap-4 md:gap-8">
      <img src={MyPicture} alt="My profile picture"
        className='rounded-full w-24 h-24 md:w-32 md:h-32 border-khaki border-2' />
      <div className="flex flex-col items-center gap-4 md:gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-6xl text-khaki font-fira">Gabriel Luiz</h1>
          <h2 className="text-2xl md:text-4xl text-light-silver font-lato">fullstack webdev</h2>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/gabrielluizcm" target='_blank' rel='no-referrer'>
            <FaGithub className="w-8 h-8 hover:text-khaki" />
          </a>
          <a href="https://linkedin.com/in/gabrielluizcm" target='_blank' rel='no-referrer'>
            <FaLinkedin className="w-8 h-8 hover:text-khaki" />
          </a>
          <a href="https://instagram.com/naooanjo" target='_blank' rel='no-referrer'>
            <FaInstagram className="w-8 h-8 hover:text-khaki" />
          </a>
        </div>
      </div>
    </section>
  )
}
